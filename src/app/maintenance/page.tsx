import Image from "next/image";

export default async function Maintenance() {
  return (
    <div className="flex md:flex-row flex-col items-center">
      <div>
        <Image
          src="/Maintenance-rafiki.svg"
          alt="maintenance"
          height={350}
          width={350}
        />
      </div>
      <div className="mx-5 space-y-2 text-center">
        <h1 className="font-bold text-3xl">
          Estamos em manutenção!
        </h1>
        <p>
          Estamos trabalhando para melhorar sua experiência. Voltaremos em
          breve!
        </p>
      </div>
    </div>
  );
}
