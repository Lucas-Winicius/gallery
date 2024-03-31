"use client";
import { toast } from "@/components/ui/use-toast";
import Cookie from "js-cookie";
import {
  ChangeEvent,
  FormEvent,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";

export default function Cookies() {
  const [cookie, setCookie] = useState("");
  const [tag, setTag] = useState("");
  const [picture, setPicture] = useState<CreatePic>({
    name: "",
    description: "",
    url: "",
    tags: [],
  });

  useEffect(() => {
    const secret = Cookie.get("auth");
    if (secret) setCookie(secret);
  }, []);

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    setPicture({ ...picture, [target.name]: target.value });
  };

  const inputCookieChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    setCookie(target.value);
  };

  const tagChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    setTag(target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const tagExists = picture.tags.includes(tag);

    if (!tagExists) {
      const tags = [...picture.tags, tag];
      setPicture({ ...picture, tags });
    }

    setTag("");
  };

  const removeTag = (tagId: number) => {
    const updatedArray = picture.tags.filter((item, index) => index !== tagId);
    setPicture({ ...picture, tags: updatedArray });
  };

  const sendCookie = () => {
    Cookie.set("auth", cookie, {
      path: "/",
      expires: 365,
    });

    toast({
      title: "Cookie salvo!",
    });
  };

  return (
    <main className="flex flex-col space-y-5 items-center max-w-screen-md">
      <div className="flex flex-col bg-slate-200 shadow space-y-3 p-3 rounded w-full">
        <input
          type="text"
          name="name"
          placeholder="Nome"
          className="px-2 py-1 shadow rounded"
        />
        <input
          type="text"
          name="description"
          placeholder="Descrição"
          className="px-2 py-1 shadow rounded"
        />
        <input
          type="text"
          name="url"
          placeholder="url"
          className="px-2 py-1 shadow rounded"
        />
        <div>
          <form
            className="flex flex-nowrap bg-slate-200 shadow"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="tags"
              placeholder="tag"
              className="w-full p-1 rounded-l outline-none"
              onChange={tagChange}
              value={tag}
            />{" "}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 transition-colors px-2 text-white shadow rounded-r"
            >
              {" "}
              +{" "}
            </button>
          </form>
          <div className="flex flex-wrap space-x-3 space-y-1 my-4 items-center">
            {picture.tags.map((tag, id) => (
              <button
                className="bg-zinc-300 px-2 rounded font-medium"
                key={id}
                onClick={() => removeTag(id)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 transition-colors text-white font-bold p-2 rounded">
          Enviar
        </button>
      </div>
      <div className="space-x-3">
        <input
          type="text"
          name="cookie"
          onChange={inputCookieChange}
          value={cookie}
          className="border-b-2 text-center border-black"
        />
        <button
          className="bg-green-500 hover:bg-green-600 transition-colors text-white py-2 px-5 rounded font-bold"
          onClick={sendCookie}
        >
          Send Cookie
        </button>
      </div>
    </main>
  );
}
