import { TableCell, TableRow } from "@/components/ui/table";
import creationDate from "@/lib/creationDate";
import { TrashIcon } from "@/patterns/phosphoricons";
import deletePicture from "../handlers/deletePicture";

export default function TableData({ pictures }: { pictures: Picture[] }) {
  return (
    <>
      {pictures?.map((picture) => (
        <TableRow key={picture.id}>
          <TableCell>{picture.name}</TableCell>
          <TableCell>{picture.description}</TableCell>
          <TableCell>{picture.url}</TableCell>
          <TableCell>{picture.tags.join(", ")}</TableCell>
          <TableCell>{creationDate(picture.createdAt)}</TableCell>
          <TableCell>
            <button
              className="cursor-pointer"
              onClick={() => deletePicture(picture.id)}
            >
              <TrashIcon color="black" />
            </button>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
}
