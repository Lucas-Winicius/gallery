import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ListIcon } from "@/patterns/phosphoricons";
import Image from "next/image";
import Link from "next/link";
import flickrIcon from "@/images/flickrIconBlack.svg";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/patterns/phosphoricons";

export default function SideBar() {
  return (
    <div className="sm:hidden flex items-center">
      <Sheet>
        <SheetTrigger>
          <ListIcon />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Follow me everywhere</SheetTitle>
            <SheetDescription>
              <div className="space-x-2 mt-10">
                <Link
                  target="_blank"
                  href="https://www.flickr.com/photos/199594124@N07/"
                >
                  <div className="flex gap-1 text-black items-center font-semibold">
                    <Image
                      src={flickrIcon}
                      alt="Flickr Icon"
                      width={23}
                      height={23}
                    />
                    <span>/</span>
                    <p>Lucas Winicius</p>
                  </div>
                </Link>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/lucas-winicius-souza/"
                >
                  <div className="flex gap-1 text-black items-center font-semibold">
                    <LinkedinIcon color="black" />
                    <span>/</span>
                    <p>lucas-winicius-souza</p>
                  </div>
                </Link>
                <Link target="_blank" href="https://github.com/Lucas-Winicius">
                  <div className="flex gap-1 text-black items-center font-semibold">
                    <GitHubIcon color="black" />
                    <span>/</span>
                    <p>Lucas-Winicius</p>
                  </div>
                </Link>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/sr_pumpkin_/"
                >
                  <div className="flex gap-1 text-black items-center font-semibold">
                    <InstagramIcon color="black" />
                    <span>/</span>
                    <p>sr_pumpkin_</p>
                  </div>
                </Link>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
