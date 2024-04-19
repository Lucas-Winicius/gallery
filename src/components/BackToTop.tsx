"use client";
import { ArrowUpIcon } from "@/patterns/phosphoricons";
import { useEffect, useState } from "react";

const BackToTop: React.FC = () => {
  const isBrowser = () => typeof window !== "undefined";
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    setIsVisible(window.scrollY > 100);
  };

  useEffect(() => {
    const scrollHandler = () => {
      handleScroll();
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-0 right-0 bg-black rounded-s-full mb-5 px-5 py-2 z-50 items-center text-xs flex ${
        isVisible ? "block" : "hidden"
      }`}
      onClick={scrollToTop}
    >
      <ArrowUpIcon />
    </button>
  );
};

export default BackToTop;
