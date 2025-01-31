
import HeroSection from "@/components/HeroSection";
import { client } from "@/sanity/lib/client";
import { PortableTextBlock } from "@portabletext/types";
import {PortableText} from '@portabletext/react'
import Image from "next/image";
import Link from "next/link";
import {portableTextComponents} from '@/components/portableTextComponent';
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export interface IBlog {
  id: string; 
  title: string;
  description: PortableTextBlock[];
  slug: string;
  imageUrl: string;
}




export const revalidate = 60

export default async function Home() {
  // Fetching the data directly
  const data: IBlog[] = await client.fetch(`*[_type == "blog"]{
    id,
    title,
    description,
    "slug": slug.current,
    "imageUrl": image.asset->url
  }`);

  return (
    <>
      <Header/>
      <HeroSection />
      <main className="h-full bg-[#FDF5E6] flex flex-col items-center">
        <h2 className="text-center text-[#333333] font-bold text-5xl mt-5">Recent Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-10 mx-auto max-w-7xl p-6">
          {data.map((blog) => (
            <Link href={`/blog/${blog.slug}`} key={blog.id}>
            <div
            key={blog.id} // Use unique identifier for the key
            className="rounded-lg shadow-lg transition-all w-screen md:w-96  lg:w-72 h-auto p-5  space-y-5 hover:scale-105 active:scale-95 cursor-pointer"
            >
            <Image
              src={blog.imageUrl}
              alt={blog.title}
              width={280}
              height={200}
              className="rounded-lg h-52 w-72"
            />
            <h2 className="text-lg font-bold line-clamp-1 text-[#333333]">{blog.title}</h2>
            <div className="line-clamp-3">
            <PortableText value={blog.description} components={portableTextComponents} />
            </div>
            
            <p className="text-lgm text-[#2A5934]">Read More....</p>

            </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer/>
    </>
  );
}

