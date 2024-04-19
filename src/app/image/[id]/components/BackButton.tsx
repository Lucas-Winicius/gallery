"use client";
import { ArrowLeftIcon } from "@/patterns/phosphoricons";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function BackButton() {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <button
      className="flex justify-center items-center space-x-2 bg-zinc-950 w-max text-white px-3 py-1 rounded font-bold"
      onClick={handleClick}
    >
      <ArrowLeftIcon size={16} />
      <p>Voltar</p>
    </button>
  );
}
