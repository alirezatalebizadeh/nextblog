import React from "react";
import Image from "next/image";

export default function Featured() {
  return (
    <div className="mt-[30px]">
      <h1 className="text-[35px] md:text-[96px] font-light">
        <b>Hey, lama dev here!.</b> Discover my strories and createive ideas.
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-between gap-[50px] mt-[60px] ">
        <div className="flex-1 relative overflow-hidden md:h-[500px]  rounded-[5px]">
          <Image
            alt=""
            src="/p1.jpeg"
            width={600}
            height={500}
            className="object-cover rounded-[5px]"
          />
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <h1 className="text-[23px] md:text-[40px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero,
            deserunt!
          </h1>
          <p className="text-base md:text-xl font-light text-textColor ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            voluptatem voluptatum eveniet eius possimus. Eum, dignissimos ad
            dolores culpa, recusandae cum incidunt, mollitia quibusdam assumenda
            tenetur cumque expedita ducimus hic.
          </p>
          <button className="py-4 px-5 w-max border-none rounded-[5px] bg-black/85 hover:bg-black transition-colors text-white dark:bg-softBg dark:hover:bg-white  dark:transition-colors dark:text-softTextColor">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
