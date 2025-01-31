import { client } from "@/sanity/lib/client";
import Image from "next/image";
import React from "react";
import { IBlog } from "@/app/page";
import { PortableText} from "@portabletext/react";
import CommentsSection from "@/components/CommentSection";
import { portableTextComponents } from "@/components/portableTextComponent";

interface Params {
  params: {
    slug: string;
  };
}


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
      className="max-w-6xl w-full p-5 h-auto mb-10 mt-32 mx-auto"
      key={blog.id}
    >
      <Image
        src={blog.imageUrl}
        alt={blog.title}
        height={1000}
        width={1000}
        className="rounded-3xl h-72 lg:h-[450px] w-full"
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
