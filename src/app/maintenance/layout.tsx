import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estamos em manutenção",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-grow items-center justify-center">{children}</div>
  );
}
