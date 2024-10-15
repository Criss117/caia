"use client";

import Link from "next/link";
import { ChevronDown, Mail, Pencil } from "lucide-react";

import { Button } from "@/core/shared/components/ui/button";
import { ROUTES } from "@/core/shared/lib/constants/routes";
import MembersListDialog from "@/core/dashboard/presentation/components/members-list-dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/core/shared/components/ui/popover";
import { Separator } from "@/core/shared/components/ui/separator";

const ConferenceActions = () => {
  const editConferenceHref = ROUTES.DASHBOARD.EDIT_CONFERENCE.replace(
    "[conferenceId]",
    "1"
  );

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="bg-lightprimary-200 gap-x-2">
          <p>Acciones</p>
          <ChevronDown className="w-5 h-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="space-y-5">
        <Separator />
        <MembersListDialog />
        <Separator />
        <Button variant="outline" asChild>
          <Link
            href={editConferenceHref}
            className="space-x-2 w-full justify-between"
          >
            <Pencil className="w-5 h-5" />
            <p>Editar conferencia</p>
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link
            href={ROUTES.DASHBOARD.ROOT}
            className="space-x-2 w-full justify-between"
          >
            <Mail className="w-5 h-5" />
            <p>Invitar a un revisor</p>
          </Link>
        </Button>
        <Separator />
        <Button variant="destructive" className="w-full">
          Eliminar conferencia
        </Button>
      </PopoverContent>
    </Popover>
  );
};

export default ConferenceActions;
