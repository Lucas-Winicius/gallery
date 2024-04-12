import creationDate from "@/lib/creationDate";

export default async function Image({ params }: { params: { id: string } }) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const response = await fetch(`${apiUrl}/gallery/${params.id}`, {
    next: { revalidate: 3600 },
  });

  const picture = await response.json();

  if (picture.statusCode) return <h1>Foto não encontrada.</h1>;

  return (
    <div className="flex md:flex-row flex-col items-center justify-around w-full mx-3 space-x-7 space-y-7 my-5">
      <div className="min-w-fit">
        <img src={picture.url} alt={picture.title} className="h-[120vw] md:h-[80vh]" />
      </div>
      <div className="flex flex-col justify-between space-y-5">
        <h1 className="font-extrabold text-3xl">{picture.name}</h1>
        <p className="font-medium text-lg">{picture.description}</p>
        <p>{picture.tags.join(", ")}</p>
        <p className="text-sm text-zinc-700">{creationDate(picture.createdAt)}</p>
      </div>
    </div>
  );
}
