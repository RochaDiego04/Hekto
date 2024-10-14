import { useQuery } from "@tanstack/react-query";
import { DotLoader } from "react-spinners";
import FetchError from "../classes/FetchError";
import { fetchLatestBlogs } from "../util/http";
import { LatestBlogs } from "../interfaces/LatestBlogs";
import BlogCard from "./ProductCard/BlogCard";

const LIMIT = 3;

export default function LatestBlog() {
  const {
    data: latestBlogsData,
    isLoading,
    isError,
    error,
  } = useQuery<LatestBlogs[], FetchError>(
    ["latestBlogs", { limit: LIMIT }], // key
    ({ signal }) => fetchLatestBlogs({ signal, limit: LIMIT }) // function
  );

  const renderContent = () => {
    if (isLoading) {
      return <DotLoader color="#f0056a" className="mx-auto" />;
    }

    if (isError) {
      return (
        <div className="bg-dangerLight p-4">
          <p className="text-black">
            <span className="bold text-danger">Error Code:</span>{" "}
            {error.code ?? "N/A"}
          </p>
          <p className="text-black">
            <span className="bold text-danger">Error Message:</span>{" "}
            {error.message ?? "N/A"}
          </p>
        </div>
      );
    }

    return latestBlogsData ? (
      <div className="flex flex-col md:flex-row gap-8 justify-around">
        {latestBlogsData.map((latestBlogData) => (
          <BlogCard
            key={latestBlogData.id}
            latestBlogData={latestBlogData}
          ></BlogCard>
        ))}
      </div>
    ) : null;
  };

  return (
    <section className="p-maxContainer md:p-24">
      <h2 className="text-center mb-12">Latest Blogs</h2>
      {renderContent()}
    </section>
  );
}
