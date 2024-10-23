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
import { PaperDto } from "../../data/dto/papers.dto";
import { PAPER_STATE } from "../../../shared/lib/constants/paper-state";
import { Button } from "@/core/shared/components/ui/button";
import Link from "next/link";
import { ROUTES } from "@/core/shared/lib/constants/routes";

interface Props {
  papers: PaperDto[];
}

const PapersTable = ({ papers }: Props) => {
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
          <TableHead className="text-right">Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {papers.map((paper) => (
          <TableRow key={paper.id}>
            <TableCell className="font-medium">
              {paper.conferenceEntity.name}
            </TableCell>
            <TableCell>{paper.title}</TableCell>
            <TableCell>{PAPER_STATE[paper.state]}</TableCell>
            <TableCell className="text-right">Aristoteles, Carl Marx</TableCell>
            <TableCell className="text-right">
              {format(new Date(paper.auditMetadata.updatedAt))}
            </TableCell>
            <TableCell className="text-right">
              <Button asChild>
                <Link
                  href={ROUTES.DASHBOARD.EDIT_PAPER.replace(
                    "[paperId]",
                    paper.id.toString()
                  )}
                >
                  Editar
                </Link>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PapersTable;
