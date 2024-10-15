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

const PapersTable = () => {
  return (
    <Table>
      <TableCaption>Lista de papers</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Conferencia</TableHead>
          <TableHead className="">Nombre</TableHead>
          <TableHead className="">Status</TableHead>
          <TableHead className="text-right">Revisor(es)</TableHead>
          <TableHead className="text-right">Última actualización</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Conferencia 1</TableCell>
          <TableCell>Paper 1</TableCell>
          <TableCell>pendiente</TableCell>
          <TableCell className="text-right">Aristoteles, Carl Marx</TableCell>
          <TableCell className="text-right">{format(new Date())}</TableCell>
        </TableRow>
      </TableBody>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Conferencia 2</TableCell>
          <TableCell>Paper 2</TableCell>
          <TableCell>rechazado</TableCell>
          <TableCell className="text-right">Aristoteles, Carl Marx</TableCell>
          <TableCell className="text-right">{format(new Date())}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default PapersTable;
