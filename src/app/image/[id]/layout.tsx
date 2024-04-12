import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image",
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
