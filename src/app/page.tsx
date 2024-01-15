/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Empty from "@/components/Empty";
import Error from "@/components/Error";
import Welcome from "@/components/Welcome";
import { useEffect, useState } from "react";

export default function Home() {
  const [pictures, setPictures] = useState<HomeData>({ status: "WELCOME" });

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    fetch(`${apiUrl}/gallery`)
      .then((res) => res.json())
      .then((data) =>
        setPictures({
          status: !!data.data ? "SUCCESS" : "EMPTY",
          data: data.data,
        })
      )
      .then(() => {
        if (pictures.data?.length === 0) {
          setPictures({ ...pictures, status: "EMPTY" });
        }
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

  return <main className="flex-grow">{JSON.stringify(pictures.data)}</main>;
}
