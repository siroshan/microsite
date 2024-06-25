import { SlideCardProps } from "./SlideCard.type";

export const SlideCard = ({ description, title }: SlideCardProps) => (
  <div className="min-h-60 w-full rounded-br-lg rounded-tl-lg bg-white bg-opacity-50 px-6 py-4">
    <div className="mb-4 truncate font-bold capitalize">{title}</div>
    <div className="line-clamp-4 capitalize">{description}</div>
  </div>
);
