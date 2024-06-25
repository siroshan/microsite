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
    <Carousel className="w-full max-w-lg">
      <CarouselContent className="-ml-1">
        {posts &&
          posts.map((post, index) => (
            <CarouselItem
              key={index}
              className="min-w-32 max-w-60 pl-1 sm:basis-full md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <SlideCard description={post.body} title={post.title} />
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
