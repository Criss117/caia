import { Search } from "lucide-react";
import CaiaTitle from "../ui/caia-title";
import { Input } from "../ui/input";
import { ROUTES } from "../../lib/constants/routes";
import LinkAnimated from "../ui/link-animated";
import { cn } from "../../lib/utils";
import BurgerMenu from "./burger-menu";

interface Props {
  className?: string;
  search?: boolean;
}

const routes = [
  {
    name: "Crea conferencias",
    href: ROUTES.DASHBOARD.ROOT,
  },
  {
    name: "Registrarse",
    href: ROUTES.SIGNUP,
  },
  {
    name: "Iniciar sesión",
    href: ROUTES.LOGIN,
  },
];

const LandingNavbar = ({ search = false, className }: Props) => {
  return (
    <header
      className={cn(
        "mx-auto py-2 border-b bg-lightbg-100 fixed top-0 w-full z-50",
        className
      )}
    >
      <nav className="flex items-center justify-between w-[95%] lg:w-[80%] mx-auto">
        <div className="flex gap-x-10 w-full">
          <CaiaTitle />
          {search && (
            <fieldset className="hidden md:flex relative w-full">
              <Search className="absolute top-1/2 -translate-y-1/2 left-2" />
              <Input
                type="text"
                placeholder="Buscar Conferencias"
                className="w-[60%] pl-10"
              />
            </fieldset>
          )}
        </div>
        <div className="w-full hidden md:flex justify-end gap-x-10">
          {routes.map((route, index) => (
            <LinkAnimated key={index} href={route.href} className="text-sm">
              {route.name}
            </LinkAnimated>
          ))}
        </div>
        <div className="w-full flex justify-end md:hidden">
          <BurgerMenu />
        </div>
      </nav>
    </header>
  );
};

export default LandingNavbar;