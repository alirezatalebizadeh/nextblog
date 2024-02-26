import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CategoryList() {
  return (
    <div className="my-6">
      <h3 className="title">Popular Category </h3>
      <div className="flex  items-center justify-between  flex-wrap gap-5">
        <Link
          href="/blog?cat=style"
          className="flex text-base md:text-lg items-center justify-center gap-[20px] rounded-[10px] capitalize bg-[#57c4ff31] w-[150px] sm:w-[180px] p-4  "
        >
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className="rounded-full h-8"
          />
          Style
        </Link>
        <Link
          href="/blog?cat=style"
          className="flex text-base md:text-lg items-center justify-center gap-[20px] rounded-[10px] capitalize bg-[#57c4ff31] w-[150px] sm:w-[180px] p-4  "
        >
          <Image
            src="/fashion.png"
            alt=""
            width={32}
            height={32}
            className="rounded-full h-8"
          />
          Fashion
        </Link>
        <Link
          href="/blog?cat=style"
          className="flex text-base md:text-lg items-center justify-center gap-[20px] rounded-[10px] capitalize bg-[#57c4ff31] w-[150px] sm:w-[180px] p-4  "
        >
          <Image
            src="/food.png"
            alt=""
            width={32}
            height={32}
            className="rounded-full h-8"
          />
          Food
        </Link>
        <Link
          href="/blog?cat=style"
          className="flex text-base md:text-lg items-center justify-center gap-[20px] rounded-[10px] capitalize bg-[#57c4ff31] w-[150px] sm:w-[180px] p-4  "
        >
          <Image
            src="/travel.png"
            alt=""
            width={32}
            height={32}
            className="rounded-full h-8"
          />
          Travel
        </Link>
        <Link
          href="/blog?cat=style"
          className="flex text-base md:text-lg items-center justify-center gap-[20px] rounded-[10px] capitalize bg-[#57c4ff31] w-[150px] sm:w-[180px] p-4  "
        >
          <Image
            src="/culture.png"
            alt=""
            width={32}
            height={32}
            className="rounded-full h-8"
          />
          Culture
        </Link>
        <Link
          href="/blog?cat=style"
          className="flex text-base md:text-lg items-center justify-center gap-[20px] rounded-[10px] capitalize bg-[#57c4ff31] w-[150px] sm:w-[180px] p-4  "
        >
          <Image
            src="/coding.png"
            alt=""
            width={32}
            height={32}
            className="rounded-full h-8 "
          />
          Coding
        </Link>
      </div>
    </div>
  );
}
