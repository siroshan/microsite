import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@ui-core/components/organisms";
import { SlideCard } from "../SlideCard";

export const HomeCarousel = () => {
  return (
    <Carousel className="w-full max-w-lg">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="min-w-60 pl-1 md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1">
              <SlideCard
                description="Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci"
                title="Lorem Ipsum"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
