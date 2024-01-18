/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Empty from "@/components/Empty";
import Error from "@/components/Error";
import Gallery from "@/components/Gallery";
import Welcome from "@/components/Welcome";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [pictures, setPictures] = useState<HomeData>({ status: "WELCOME" });

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    fetch(`${apiUrl}/gallery`)
      .then((res) => res.json())
      .then((data) => {
        setPictures({
          status: !!data?.length ? "SUCCESS" : "EMPTY",
          data,
        });
      })
      .catch(() => setPictures({ status: "ERROR" }));
  }, []);

  if (pictures.status === "WELCOME") {
    return <Welcome />;
  }

  if (pictures.status === "EMPTY") {
    return <Empty />;
  }

  if (pictures.status === "ERROR") {
    return <Error />;
  }

  return <Gallery pictures={pictures.data} />;
}
