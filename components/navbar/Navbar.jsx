import React from "react";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import TeamToggle from "../teamToggle/TeamToggle";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between h-[100px]">
      <div className="flex flex-1 gap-[10px] items-center ">
        <Link href="#">
          <Image alt="facebook" src="/facebook.png" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image alt="instagram" src="/instagram.png" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image alt="tiktok" src="/tiktok.png" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image alt="youtube" src="/youtube.png" width={24} height={24} />
        </Link>
      </div>
      <h1 className="w-1/2 text-center text-[36px] font-bold">BlogSite</h1>
      <ul className="flex flex-1 items-center gap-5">
        <li className="">
          <TeamToggle />
        </li>
        <li>
          <Link href="/">HomePage</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li className="">
          <AuthLinks />
        </li>
      </ul>
    </div>
  );
}
