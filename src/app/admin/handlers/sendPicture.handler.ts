import { toast } from "@/components/ui/use-toast";

export default function sendPicture(data: CreatePic, cookie: string) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  fetch(`${apiUrl}/gallery`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      token: cookie,
      "Content-type": "application/json",
    },
  })
    .then((r) => r.json())
    .then((data) => {
      if (data.statusCode)
        return toast({
          variant: "destructive",
          title: data.error,
          description: data.message,
        });

      return toast({
        title: `${data.name} foi criado!`,
        description:
          "Pode ser que demore um pouco para ela aparecer na tela inicial.",
      });
    })
    .catch((e) => {
      return toast({
        variant: "destructive",
        title: e.error,
        description: e.message,
      });
    });
}
