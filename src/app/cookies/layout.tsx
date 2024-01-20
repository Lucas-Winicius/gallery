import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex-grow flex justify-center items-center my-5">{children}</div>;
}
