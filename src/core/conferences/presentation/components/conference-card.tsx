import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "../../../shared/lib/constants/images";
import { format } from "@formkit/tempo";
import { ROUTES } from "@/core/shared/lib/constants/routes";

interface Props {
  onDashboard?: boolean;
}

const ConferenceCard = ({ onDashboard = false }: Props) => {
  const date = new Date();

  return (
    <Link
      href={
        onDashboard
          ? ROUTES.DASHBOARD.CONFERENCES + "/1"
          : ROUTES.CONFERENCE + "/1"
      }
      className="mx-auto hover:shadow-lg w-64 xl:w-72 rounded-lg transition-all duration-500"
    >
      <header>
        <Image
          src={IMAGES.CONFENRENCE}
          alt="conference"
          width={320}
          height={180}
          className="object-cover aspect-video rounded-lg"
        />
      </header>
      <div className="px-5 py-2 space-y-2 mb-5 mt-2">
        <h3 className="font-semibold text-xl">Titulo de la conferencia</h3>
        <p>{format(date, "long")}</p>
        <p className="font-semibold">Desde $ 10,000.0</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa qui et
          dolorem, corrupti maxime quod tempore non totam optio...
        </p>
      </div>
    </Link>
  );
};

export default ConferenceCard;
