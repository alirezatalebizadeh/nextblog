import React from "react";
import Image from "next/image";

export default function Featured() {
  return (
    <div className="mt-[30px]">
      <h1 className="text-[96px] font-light">
        <b>Hey, lama dev here!.</b> Discover my strories and createive ideas.
      </h1>
      <div className="flex items-center justify-between gap-[50px] mt-[60px] ">
        <div className="flex-1 h-[500px] relative overflow-hidden rounded-[5px]">
          <Image alt="" src="/p1.jpeg" fill className="object-cover " />
        </div>
        <div className="flex-1 flex flex-col gap-5 ">
          <h1 className="text-[40px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero,
            deserunt!
          </h1>
          <p className="text-xl font-light text-textColor ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            voluptatem voluptatum eveniet eius possimus. Eum, dignissimos ad
            dolores culpa, recusandae cum incidunt, mollitia quibusdam assumenda
            tenetur cumque expedita ducimus hic.
          </p>
          <button className="py-4 px-5 w-max border-none rounded-[5px] bg-black/90 text-white dark:bg-softBg dark:text-softTextColor">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
