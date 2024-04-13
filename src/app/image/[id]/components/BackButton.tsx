import { ArrowLeftIcon } from "@/patterns/phosphoricons";
import Link from "next/link";

export default function BackButton() {
  return (
    <Link
      href="/"
      className="flex justify-center items-center space-x-2 bg-zinc-950 w-max text-white px-3 py-1 rounded font-bold"
    >
      <ArrowLeftIcon size={16} />
      <p>Voltar</p>
    </Link>
  );
}
