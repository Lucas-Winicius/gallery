import Image from "next/image";
import Link from "next/link";
import flickrIcon from "@/images/flickrIcon.svg";
import { GitHubIcon, InstagramIcon, LinkedinIcon } from "./phosphoricons";

export default function Social() {
  return (
    <div className="hidden gap-3 sm:flex">
      <Link
        title="Flickr - Lucas Winicius"
        target="_blank"
        href="https://www.flickr.com/photos/199594124@N07/"
      >
        <Image src={flickrIcon} alt="Flickr Icon" width={23} height={23} />
      </Link>
      <Link
        title="Linkedin - Lucas Winicius"
        target="_blank"
        href="https://www.linkedin.com/in/lucas-winicius-souza/"
      >
        <LinkedinIcon />
      </Link>
      <Link
        title="GitHub - Lucas Winicius"
        target="_blank"
        href="https://github.com/Lucas-Winicius"
      >
        <GitHubIcon />
      </Link>
      <Link
        title="Instagram - Sr. Pumpkin ( Lucas Winicius )"
        target="_blank"
        href="https://www.instagram.com/sr_pumpkin_/"
      >
        <InstagramIcon />
      </Link>
    </div>
  );
}
