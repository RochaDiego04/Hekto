import { Pencil } from "lucide-react";
import { LatestBlogs } from "../../interfaces/LatestBlogs";
import { formatDate } from "../../util/formatDate";
import Button from "../Button/Button";
import "./BlogCard.css";

type LatestBlogsDataProps = {
  latestBlogData: LatestBlogs;
};

export default function BlogCard({ latestBlogData }: LatestBlogsDataProps) {
  return (
    <div className="blogCard bg-white shadow-xl">
      <div className="mb-4">
        <img
          src={latestBlogData.images[0]}
          alt={latestBlogData.title}
          className="w-full h-[200px] md:h-[22vh] object-cover rounded-lg"
        />
      </div>
      <div className="p-4">
        <div className="flex gap-16 text-grey3 mb-6">
          <p className="inline-flex items-center gap-2">
            <Pencil className="inline-block w-4" />
            {latestBlogData.user}
          </p>
          <p className="inline-flex items-center gap-2">
            <Pencil className="inline-block w-4" />
            {formatDate(new Date(latestBlogData.date))}
          </p>
        </div>
        <h5 className=" blogCard__title subtitle4 text-black mb-4 font-bold">
          {latestBlogData.title}
        </h5>
        <p className="text-grey3 mb-8">{latestBlogData.description}</p>
        <Button className="py-2 px-0 text-primary font-bold">Read More</Button>
      </div>
    </div>
  );
}
