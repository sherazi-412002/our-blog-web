import { client } from "@/sanity/lib/client";
import Image from "next/image";
import React from "react";
import { IBlog } from "@/app/page";

interface Params {
  params: {
    slug: string;
  };
}

// const page = async (params:Params) => {

//     const {slug} = params.params

//     const data: IBlog = await client.fetch(`*[_type == "blog" && slug.current == $slug]{
//         _id,
//         title,
//         description,
//         "slug": slug.current,
//         "imageUrl": image.asset->url
//       }`, {slug})

//   return (
//     <div className='max-w-6xl w-full p-5 h-[1200px] mt-24 mx-auto' key={data.id}>

//          <Image src={data.imageUrl} alt={data.title} height={1000} width={1000} className='rounded-lg h-[450px] w-full p-10'/>
//         <h2 className='text-[#333333] font-bold text-3xl'>{data.title}</h2>
//         <p className='text-lg'>
//             {data.description}
//         </p>

//     </div>
//   )
// }

// export default page

const page = async (params: Params) => {
  const { slug } = params.params;

  
   const data:IBlog = await client.fetch(
      `*[_type == "blog" && slug.current == $slug ]{
            id,
            title,
            description,
            "slug": slug.current,
            "imageUrl": image.asset->url
        }`,
      { slug }
   )
  return (
    <main>
      <div className="max-w-6xl w-full p-5 h-[1200px] mt-24 mx-auto" key={data.id}>
        <Image
          src={data?.imageUrl}
          alt={data?.title}
          height={1000}
          width={1000}
          className="rounded-lg h-[450px] w-full p-10"
        />
        <h2 className="text-[#333333] font-bold text-3xl">{data?.title}</h2>
        <p className="text-lg">{data?.description}</p>
      </div>
    </main>
  );
};

export default page;
