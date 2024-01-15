/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Empty from "@/components/Empty";
import Error from "@/components/Error";
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
    return <Empty />;
  }

  if (pictures == 1) {
    return <Error />;
  }

  return <main className="flex-grow">{JSON.stringify(pictures)}</main>;
}
