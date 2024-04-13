import Image from "next/image";
import image from "@/../public/undraw_taken_re_yn20.svg";
import BackButton from "./BackButton";

export default function NotFound() {
  return (
    <div className="flex md:flex-row flex-col items-center justify-around w-full space-x-7 space-y-9 m-4">
      <div>
        <Image src={image} alt="" height={200} width={200} />
      </div>
      <div className="flex flex-col space-y-5">
        <h1 className="font-bold text-3xl">Foto não encontrada.</h1>
        <p>
          Parece que esta foto não está mais disponível. Tente voltar mais tarde
          ou ver outra.
        </p>
        <BackButton />
      </div>
    </div>
  );
}
