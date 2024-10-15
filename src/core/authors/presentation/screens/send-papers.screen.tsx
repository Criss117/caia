import { Button } from "@/core/shared/components/ui/button";
import { Input } from "@/core/shared/components/ui/input";
import { Label } from "@/core/shared/components/ui/label";
import { Textarea } from "@/core/shared/components/ui/textarea";

const SendPapersScreen = () => {
  return (
    <form className="flex flex-col w-3/4 md:w-1/2 space-y-5 mt-10 mx-auto">
      <fieldset className="flex flex-col space-y-5 border p-5 rounded-lg shadow-md">
        <Label className="text-xl font-bold">Envia tu paper</Label>
        <Label htmlFor="conference-name" className="space-y-2">
          Nombre de la conferencia
          <Input
            type="text"
            id="conference-name"
            placeholder="Nombre del paper"
            className="border-slate-400"
            value="Conferencia 1"
            disabled
          />
        </Label>
      </fieldset>
      <fieldset className="flex flex-col space-y-5 border p-5 rounded-lg shadow-md">
        <Label className="text-xl font-bold">Información del paper</Label>
        <Label htmlFor="conference-name" className="space-y-2">
          Nombre del paper
          <Input
            type="text"
            id="paper-name"
            placeholder="Nombre del paper"
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
      <fieldset className="flex flex-col space-y-5 border p-5 rounded-lg shadow-md">
        <Label htmlFor="file">
          Archivo PDF
          <Input id="file" type="file" required accept=".pdf" />
        </Label>
        <Label htmlFor="keywords">
          Palabras Clave
          <Textarea
            id="keywords"
            required
            placeholder="Ingresa las palabras clave separadas por comas"
          />
        </Label>
      </fieldset>
      <fieldset>
        <Button variant="default" className="w-full" type="submit">
          Enviar paper
        </Button>
      </fieldset>
    </form>
  );
};

export default SendPapersScreen;
