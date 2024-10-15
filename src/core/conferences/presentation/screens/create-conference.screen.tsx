import BackButton from "@/core/shared/components/ui/backbutton";
import { Button } from "@/core/shared/components/ui/button";
import { Input } from "@/core/shared/components/ui/input";
import { Label } from "@/core/shared/components/ui/label";

const CreateConferenceScreen = () => {
  return (
    <>
      <BackButton />
      <form className="flex flex-col w-3/4 md:w-1/2 space-y-5 mt-10 mx-auto">
        <fieldset className="flex flex-col space-y-5 border p-5 rounded-lg shadow-md">
          <Label className="text-xl font-bold">
            Descripción general de la conferencia
          </Label>
          <Label htmlFor="conference-name" className="space-y-2">
            Nombre de la conferencia
            <Input
              type="text"
              id="conference-name"
              placeholder="Nombre de la conferencia"
              className="border-slate-400"
            />
          </Label>
          <Label htmlFor="conference-description">
            Descripción de la conferencia
            <Input
              type="text"
              id="conference-description"
              placeholder="Descripción de la conferencia"
              className="border-slate-400"
            />
          </Label>
        </fieldset>
        <fieldset>
          <Button variant="default" className="w-full" type="submit">
            Crear conferencia
          </Button>
        </fieldset>
      </form>
    </>
  );
};

export default CreateConferenceScreen;
