/* eslint-disable @next/next/no-img-element */
import { CopyIcon } from "@radix-ui/react-icons";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import creationDate from "@/lib/creationDate";

export default function Gallery({ pictures }: { pictures?: Picture[] }) {
  return (
    <main className="grid grid-cols-2 md:grid-cols-3 gap-2 m-2 flex-grow">
      {pictures?.map((picture) => (
        <Dialog key={picture.id}>
          <DialogTrigger asChild>
            <div key={picture.id} className="aspect-ratio-1x1">
              <img
                src={picture.url}
                alt={picture.name}
                className="w-full h-full object-cover rounded-lg transition-transform  hover:scale-95"
              />
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>{picture.name}</DialogTitle>
              <DialogDescription>{picture.description}</DialogDescription>
            </DialogHeader>
            <div className="flex items-center justify-center">
              <img
                src={picture.url}
                alt={picture.name}
                className="rounded max-h-64"
              />
            </div>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <div className="flex gap-2 text-sm font-light text-zinc-600">
                  <p>{creationDate(picture.createdAt)}</p>
                  <span> - </span>
                  <p>{picture.tags.join(", ")}</p>
                </div>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ))}
    </main>
  );
}
