import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/core/shared/components/ui/carousel";
import AuthorCard from "./autor-card";
import { cn } from "@/core/shared/lib/utils";

interface Props {
  onDashboard?: boolean;
}

const AutorsList = ({ onDashboard = false }: Props) => {
  const randomKey = Math.floor(Math.random() * 10);

  return (
    <Carousel>
      <CarouselContent>
        {Array.from({ length: randomKey }).map((_, index) => (
          <CarouselItem
            key={index}
            className={cn(
              onDashboard
                ? "lg:basis-1/2 xl:basis-1/3 2xl:basis-1/4"
                : "xl:basis-1/2 2xl:basis-1/3"
            )}
          >
            <AuthorCard />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default AutorsList;
