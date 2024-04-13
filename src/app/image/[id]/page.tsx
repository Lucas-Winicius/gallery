/* eslint-disable @next/next/no-img-element */
import creationDate from "@/lib/creationDate";
import BackButton from "./components/BackButton";
import NotFound from "./components/NotFound";

export default async function ImagePage({
  params,
}: {
  params: { id: string };
}) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const response = await fetch(`${apiUrl}/gallery/${params.id}`, {
    next: { revalidate: 3600 },
  });

  const picture = await response.json();

  if (picture.statusCode || !picture) return <NotFound />;

  return (
    <div className="flex md:flex-row flex-col items-center justify-around mx-3 space-x-7 space-y-7 my-5">
      <div className="flex items-center justify-center w-fit h-full">
        <img
          src={picture.url}
          alt={picture.title}
          className="w-auto lg:w-4/5"
        />
      </div>
      <div className="flex flex-col justify-between space-y-5">
        <h1 className="font-extrabold text-3xl">{picture.name}</h1>
        <p className="font-medium text-lg">{picture.description}</p>
        <p>{picture.tags.join(", ")}</p>
        <p className="text-sm text-zinc-700">
          {creationDate(picture.createdAt)}
        </p>
        <BackButton />
      </div>
    </div>
  );
}
