import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/core/shared/components/ui/table";
import { format } from "@formkit/tempo";

const ReviewInvitationsTable = () => {
  return (
    <Table>
      <TableCaption>Invitaciones</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Conferencia</TableHead>
          <TableHead className="">Orgaizador</TableHead>
          <TableHead className="">Status</TableHead>
          <TableHead className="text-right">Última actualización</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Conferencia 1</TableCell>
          <TableCell>Organizador 1</TableCell>
          <TableCell>pendiente</TableCell>
          <TableCell className="text-right">{format(new Date())}</TableCell>
        </TableRow>
      </TableBody>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Conferencia 2</TableCell>
          <TableCell>Organizador 2</TableCell>
          <TableCell>rechazado</TableCell>
          <TableCell className="text-right">{format(new Date())}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default ReviewInvitationsTable;
