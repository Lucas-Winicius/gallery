/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import BackToTop from "./BackToTop";

export default function Gallery({ pictures }: { pictures?: Picture[] }) {
  return (
    <main className="grid grid-cols-2 md:grid-cols-3 gap-2 m-2 flex-grow">
      {pictures?.map((picture) => (
        <Link href={`/image/${picture.id}`} key={picture.id} className="aspect-ratio-1x1">
          <img
            src={picture.url}
            alt={picture.name}
            className="w-full h-full object-cover rounded-lg transition-transform flex justify-center items-center bg-slate-300 hover:scale-95"
          />
        </Link>
      ))}
      <BackToTop/>
    </main>
  );
}
