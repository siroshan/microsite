"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@ui-core/components/organisms";
import { SlideCard } from "../SlideCard";
import { Post, PostService } from "@services/posts";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

export const HomeCarousel = () => {
  const [posts, setPosts] = useState<Post[]>();
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => PostService.getPosts(),
  });
  useEffect(() => {
    if (postsQuery.isSuccess) {
      setPosts(postsQuery.data);
    }
  }, [postsQuery.isSuccess, postsQuery.data]);
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1">
        {posts &&
          posts.map((post, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <div className="px-1">
                <SlideCard description={post.body} title={post.title} />
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:block" />
      <CarouselNext className="hidden sm:block" />
    </Carousel>
  );
};
