import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/core/shared/components/ui/carousel";
import AuthorCard from "./author-card";
import { cn } from "@/core/shared/lib/utils";

interface Props {
  onDashboard?: boolean;
}

const AuthorsList = ({ onDashboard = false }: Props) => {
  const randomKey = Math.floor(Math.random() * 10);

  return (
    <Carousel>
      <CarouselContent>
        {Array.from({ length: randomKey }).map((_, index) => (
          <CarouselItem
            key={index}
            className={cn(
              onDashboard
                ? "md:basis-1/3 2xl:basis-1/4"
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

export default AuthorsList;
