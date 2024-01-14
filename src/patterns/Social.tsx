"use client";
import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import flickrIcon from "@/images/flickrIcon.svg"

export default function Social() {
  return (
    <div className="flex gap-3">
      <Link target="_blank" href="https://www.flickr.com/photos/199594124@N07/">
        <Image src={flickrIcon} alt="Flickr Icon" width={23} height={23} />
      </Link>
      <Link target="_blank" href="https://www.linkedin.com/in/lucas-winicius-souza/">
        <LinkedinLogo size={23} weight="bold" color="white" />
      </Link>
      <Link target="_blank" href="https://github.com/Lucas-Winicius">
        <GithubLogo size={23} weight="bold" color="white" />
      </Link>
      <Link target="_blank" href="https://www.instagram.com/sr_pumpkin_/">
        <InstagramLogo size={23} weight="bold" color="white" />
      </Link>
    </div>
  );
}
