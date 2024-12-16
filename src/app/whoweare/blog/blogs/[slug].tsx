import { useRouter } from "next/router";
import { articles } from "@/app/constant";

const BlogDetail = () => {
  const { query } = useRouter();
  const { slug } = query;

  const blog = articles.find((b) => b.title === slug);

  if (!blog) {
    return <p>Blog not found!</p>;
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-700">{blog.description}</p>
    </div>
  );
};

export default BlogDetail;
