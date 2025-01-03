import { client } from "@/sanity/lib/client";
import Image from "next/image";

interface IBlog {
  title: string;
  description: string;
  slug: string;
  imageUrl: string;
}

export default async function Home() {
  const data: IBlog = await client.fetch(`*[_type == "blog"][0]{
    title,
      description,
      "slug":slug.current,
      "imageUrl":image.asset->url
}`);
const data2: IBlog = await client.fetch(`*[_type == "blog"][0]{
  title,
    description,
    "slug":slug.current,
    "imageUrl":image.asset->url
}`);
console.log(data)

  return (
    <>
      <main className="h-screen flex justify-center items-center">
        <div className="rounded-lg shadow-lg transition-all w-60 h-80 p-5 space-y-5 hover:scale-105 active:scale-95 cursor-pointer">
          <Image src={data.imageUrl} alt={data.title} width={200} height={250} className="rounded-lg" />
          <h2 className="text-lg font-bold">{data.title}</h2>
          <p className="text-[14px] line-clamp-3 text-justify">{data.description}</p>
        </div>

        <div className="rounded-lg shadow-lg transition-all w-60 bg-blue-50 h-80 p-5 space-y-5 hover:scale-105 active:scale-95 cursor-pointer">
          <Image src={data2.imageUrl} alt={data2.title} width={200} height={250} className="rounded-lg" />
          <h2 className="text-lg font-bold">{data2.title}</h2>
          <p className="text-[14px] line-clamp-3 text-justify">{data2.description}</p>
        </div>
      </main>
    </>
  );
}
