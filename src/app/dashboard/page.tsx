"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "@/components/ui/use-toast";
import { PlusIcon } from "@/patterns/phosphoricons";
import { ChangeEvent, useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import TableTitles from "./components/tableTitles";
import TableData from "./components/TableData";

export default function Dashboard() {
  const [pictures, setPictures] = useState<Picture[]>([]);
  const [createPicture, setCreatePicture] = useState<Partial<Picture>>({});

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    fetch(`${apiUrl}/gallery`)
      .then((res) => res.json())
      .then((data) => {
        setPictures(data);
      });
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    if (target.name === "tags")
      return setCreatePicture({
        ...createPicture,
        tags: target.value.split(", "),
      });

    setCreatePicture({ ...createPicture, [target.name]: target.value });
  };

  const handlePost = () => {
    const { name, description, tags, url } = createPicture;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const authCode = Cookies.get("auth");

    if (!name && !description && !tags?.length && !url)
      return toast({
        title: "Ooopss!",
        description: "Something is not right check all fields.",
        variant: "destructive",
      });

    axios({
      method: "POST",
      url: `${apiUrl}/gallery`,
      headers: {
        token: authCode,
        "Content-type": "application/json",
      },
      data: createPicture,
    })
      .then((d) => {
        setPictures(Array.isArray(pictures) ? [d.data, ...pictures] : [d.data]);
      })
      .catch((e) =>
        toast({
          title: "Ooopss!",
          description: JSON.stringify(e.message),
          variant: "destructive",
        })
      );
  };

  return (
    <main className="w-11/12">
      <Table>
        <TableCaption>A list of your recent pictures.</TableCaption>
        <TableHeader>
          <TableTitles />
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <input
                type="text"
                name="name"
                placeholder="The best photo"
                className="bg-transparent"
                onChange={handleInputChange}
              />
            </TableCell>
            <TableCell>
              <input
                type="text"
                name="description"
                placeholder="my best photo so far"
                className="bg-transparent"
                onChange={handleInputChange}
              />
            </TableCell>
            <TableCell>
              <input
                type="text"
                name="url"
                placeholder="https://example.com/myImage.png"
                className="bg-transparent"
                onChange={handleInputChange}
              />
            </TableCell>
            <TableCell>
              <input
                type="text"
                name="tags"
                placeholder="tag1, tag2, tag3, tag4"
                className="bg-transparent"
                onChange={handleInputChange}
              />
            </TableCell>
            <TableCell className="font-semibold">Added automatically</TableCell>
            <TableCell>
              <button className="cursor-pointer" onClick={handlePost}>
                <PlusIcon color="black" />
              </button>
            </TableCell>
          </TableRow>
          <TableData pictures={pictures} />
        </TableBody>
      </Table>
    </main>
  );
}
