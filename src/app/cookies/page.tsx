"use client";
import Cookie from "js-cookie";
import { ChangeEvent, useState } from "react";

export default function Cookies() {
  const [cookie, setCookie] = useState("");

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    setCookie(target.value);
    console.log(cookie);
  };

  const sendCookie = () => {
    Cookie.set("auth", cookie, {
      path: "/",
      expires: 365,
    });
  };

  return (
    <main>
      <div className="space-x-3">
        <input
          type="text"
          name="cookie"
          onChange={inputChange}
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
