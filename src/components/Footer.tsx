import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center bg-black text-white font-semibold text-sm py-3 px-6">
      <p>Created and Mainted by <Link target="_blank" href="https://www.instagram.com/sr_pumpkin_/">
        Lucas
      </Link> - &copy; 2024 All ights reserved</p>
    </footer>
  );
}
