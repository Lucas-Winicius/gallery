import { TableHead, TableRow } from "@/components/ui/table";

export default function TableTitles() {
  return (
    <TableRow>
      <TableHead className="w-[100px]">Title</TableHead>
      <TableHead>Description</TableHead>
      <TableHead>Url</TableHead>
      <TableHead>Tags</TableHead>
      <TableHead>Date</TableHead>
      <TableHead>Actions</TableHead>
    </TableRow>
  );
}
