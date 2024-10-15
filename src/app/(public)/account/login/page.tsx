import Link from "next/link";

import { Button } from "@/core/shared/components/ui/button";
import CaiaTitle from "@/core/shared/components/ui/caia-title";
import { Input } from "@/core/shared/components/ui/input";
import { ROUTES } from "@/core/shared/lib/constants/routes";

const LoginPage = () => {
  return (
    <section className="flex h-full">
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
        <header className="space-y-5 w-3/4 md:w-1/2">
          <CaiaTitle className="text-2xl" />
          <h2 className="font-semibold text-4xl">
            Inicia sesión
            <span className="block text-2xl">
              y empieza a crear conferencias
            </span>
          </h2>
        </header>
        <form className="flex flex-col w-3/4 md:w-1/2 space-y-5 mt-10">
          <fieldset>
            <Input placeholder="Correo" type="email" />
          </fieldset>
          <fieldset>
            <Input placeholder="Contraseña" type="password" />
          </fieldset>
          <fieldset className="w-full">
            <Button variant="default" className="w-full" type="submit">
              Iniciar sesion
            </Button>
          </fieldset>
        </form>
        <footer className="mt-10">
          <Link href={ROUTES.SIGNUP}>No tienes una cuenta?</Link>
        </footer>
      </div>
      <div className="w-0 lg:w-1/2 bg-lightprimary-200 hidden lg:block"></div>
    </section>
  );
};

export default LoginPage;
