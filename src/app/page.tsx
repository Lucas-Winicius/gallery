import Gallery from "@/components/Gallery";

export default async function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const response = await fetch(`${apiUrl}/gallery`, {
    next: { revalidate: 120 },
  });
  const pictures = await response.json();

  return <Gallery pictures={pictures} />;
}
