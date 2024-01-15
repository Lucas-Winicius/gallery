/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [pictures, setPictures] = useState<Picture[] | number>(0);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    fetch(`${apiUrl}/gallery`)
      .then((res) => res.json())
      .then((data) => setPictures(data))
      .catch(() => setPictures(1))
      .finally(() => console.log(pictures));
  }, []);

  if (pictures == 0) {
    return <h1>VAZIO</h1>;
  }

  if (pictures == 1) {
    return <h1>ERRO</h1>;
  }

  return <main className="flex-grow">{JSON.stringify(pictures)}</main>;
}
