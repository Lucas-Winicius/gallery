import Social from "@/patterns/Social";
import { Salsa } from "next/font/google";
const salsa = Salsa({ subsets: ["latin"], weight: ["400"] });

export default function Header() {
  return (
    <header className="flex flex-nowrap items-center justify-between px-5 py-3 bg-black">
      <div></div>
      <h1 className={salsa.className + " text-4xl font-extrabold text-white"}>GALLERY</h1>
      <Social />
    </header>
  );
}
