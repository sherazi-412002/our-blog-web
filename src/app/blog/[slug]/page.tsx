import { client } from "@/sanity/lib/client";
import Image from "next/image";
import React from "react";
import { IBlog } from "@/app/page";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import CommentsSection from "@/components/CommentSection";

interface Params {
  params: {
    slug: string;
  };
}

// Define components
export const portableTextComponents: Partial<PortableTextReactComponents> = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold text-blue-500">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold text-green-500">{children}</h2>
    ),
    normal: ({ children }) => (
      <p className="text-lg leading-relaxed  text-gray-700">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-5">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal ml-5">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="text-lg">{children}</li>,
    number: ({ children }) => <li className="text-lg">{children}</li>,
  },
};

// Dynamic page for [slug]
const BlogPage = async ({ params }: Params) => {
  const { slug } = params;

  const data: IBlog[] = await client.fetch(
    `*[_type == "blog" && slug.current == $slug]{
        id,
        title,
        description,
        "slug": slug.current,
        "imageUrl": image.asset->url
    }`,
    { slug }
  );

  if (!data || data.length === 0) {
    return <div className="text-center mt-24">Blog post not found!</div>;
  }

  const blog = data[0];

  return (
    <div
      className="max-w-6xl w-full p-5 h-auto mb-10 mt-24 mx-auto"
      key={blog.id}
    >
      <Image
        src={blog.imageUrl}
        alt={blog.title}
        height={1000}
        width={1000}
        className="rounded-3xl h-[450px] w-full"
      />
      <h2 className="text-[#333333] font-bold mt-20 text-3xl">{blog.title}</h2>
      <PortableText
        value={blog.description}
        components={portableTextComponents}
      />
      <CommentsSection/>

    </div>
  );
};

export default BlogPage;
