import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import Cookies from "js-cookie";

export default function deletePicture(id: string) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const authCode = Cookies.get("auth");

  axios({
    method: "DELETE",
    url: `${apiUrl}/gallery/${id}`,
    headers: {
      token: authCode,
      "Content-type": "application/json",
    },
  })
    .then((response) => response.data)
    .then((data) => {
      toast({
        title: `${data.name} foi criada!`,
        description: "Recarregue a página para ve-la.",
      });
    })
    .catch((e) =>
      toast({
        title: "Ooopss!",
        description: JSON.stringify(e.message),
        variant: "destructive",
      })
    );
}
