"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";
import creationDate from "@/lib/creationDate";
import { PlusIcon, TrashIcon } from "@/patterns/phosphoricons";
import { ChangeEvent, useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

export default function Dashboard() {
  const [pictures, setPictures] = useState<Picture[]>();
  const [createPicture, setCreatePicture] = useState<Partial<Picture>>({});
  const { toast } = useToast();

  const toastCreator = (params: {
    title: string;
    description: string;
    destructive?: boolean;
  }) => {
    return toast({
      title: params.title,
      description: params.description,
      variant: params.destructive ? "destructive" : "default",
    });
  };

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
      return toastCreator({
        title: "Ooopss!",
        description: "Something is not right check all fields.",
        destructive: true,
      });

    axios({
      method: "POST",
      url: `${apiUrl}/gallery`,
      params: {
        authCode,
      },
      data: createPicture,
    })
      .then((d) => {
        setPictures(Array.isArray(pictures) ? [d.data, ...pictures] : [d.data]);
      })
      .catch((e) =>
        toastCreator({
          title: "Ooopss!",
          description: JSON.stringify(e.message),
          destructive: true,
        })
      );
  };

  return (
    <main className="w-11/12">
      <Table>
        <TableCaption>A list of your recent pictures.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Url</TableHead>
            <TableHead>Tags</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
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
          {pictures?.map((picture) => (
            <TableRow key={picture.id}>
              <TableCell>{picture.name}</TableCell>
              <TableCell>{picture.description}</TableCell>
              <TableCell>{picture.url}</TableCell>
              <TableCell>{picture.tags.join(", ")}</TableCell>
              <TableCell>{creationDate(picture.createdAt)}</TableCell>
              <TableCell>
                <TrashIcon color="black" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}
