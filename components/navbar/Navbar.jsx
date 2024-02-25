import React from "react";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import TeamToggle from "../teamToggle/TeamToggle";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between h-[100px]">
      <div className="hidden  md:flex  gap-[10px] items-center ">
        <Link href="/">
          <Image alt="facebook" src="/facebook.png" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image alt="instagram" src="/instagram.png" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image alt="tiktok" src="/tiktok.png" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image alt="youtube" src="/youtube.png" width={24} height={24} />
        </Link>
      </div>
      <h1 className="w-max text-center text-2xl lg:text-[36px] font-bold mr-[25px] md:mr-24">
        <Link href="/" className="block">
          BlogSite
        </Link>
      </h1>
      <ul className="flex  items-center  gap-[15px] md:gap-5">
        <TeamToggle />
        <li className="hidden md:inline-block">
          <Link href="/" className="">
            HomePage
          </Link>
        </li>
        <li className="hidden md:inline-block">
          <Link href="/contact" className="">
            Contact
          </Link>
        </li>
        <li className="hidden md:inline-block">
          <Link href="/about" className="">
            About
          </Link>
        </li>
        <AuthLinks />
      </ul>
    </div>
  );
}
