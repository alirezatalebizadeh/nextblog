import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Card() {
  return (
    <div className="mb-[50px] grid grid-cols-1 md:grid-cols-2 items-center gap-5 md:gap-[50px]">
      <div className="relative h-[250px] md:h-[350px]">
        <Image
          src="/p1.jpeg"
          alt=""
          fill
          className="object-cover w-full h-full rounded-[5px]"
        />
      </div>
      <div className="flex flex-col gap-[15px] md:gap-[30px]">
        <p className="detail">
          <span className="text-gray-600 dark:text-white/75">
            11.02.2023 -{" "}
          </span>

          <span className="font-bold" style={{ color: "crimson" }}>
            CULTURE
          </span>
        </p>
        <Link href="">
          <h3 className="text-xl font-semibold tracking-wide">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatem, voluptatibus.
          </h3>
        </Link>
        <p className="text-lg font-light text-softTextColor dark:text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad sint hic
          odio nulla rerum! Excepturi, fugit sapiente debitis temporibus
          corporis perspiciatis tempora iure ipsa laudantium, quam, sit
          explicabo rerum! Ullam.
        </p>
        <Link
          href="/"
          className="text-softTextColor border-b-[2px] border-red-600 w-max p-[2px_0px]"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
