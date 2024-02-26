"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import TeamToggle from "../teamToggle/TeamToggle";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

export default function AuthLinks() {
  const [open, setOpen] = useState(false);
  const status = "notauthenticated";

  return (
    <>
      {status === "notauthenticated" ? (
        <div className="flex items-center gap-[15px] ">
          <Link href="/login">Login</Link>
          <RxHamburgerMenu
            size={16}
            className="md:hidden text-softTextColor dark:text-white"
            onClick={() => setOpen((prevState) => !prevState)}
          />
        </div>
      ) : (
        <div className="flex items-center gap-[15px] ">
          <Link href="/write">Write</Link>
          <Link href="/logout">Logout</Link>
          <RxHamburgerMenu
            size={16}
            className="md:hidden text-softTextColor dark:text-white"
            onClick={() => setOpen((prevState) => !prevState)}
          />
        </div>
      )}

      {/* !Navbar For Mobile */}
      {open ? (
        <ul
          className={`md:hidden fixed top-0 right-0 bottom-0 pt-[27px] w-[225px] 
          text-right gap-4 flex flex-col bg-white dark:bg-slate-700 pr-4`}
        >
          <li className="flex justify-end ">
            <IoClose
              size={16}
              className="md:hidden text-softTextColor dark:text-white"
              onClick={() => setOpen((prevState) => !prevState)}
            />
          </li>
          <li>
            <Link href="/" className="text-softTextColor dark:text-white">
              HomePage
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-softTextColor dark:text-white"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-softTextColor dark:text-white">
              About
            </Link>
          </li>
          <li className="flex w-full justify-end">
            <TeamToggle />
          </li>
        </ul>
      ) : (
        <></>
      )}
    </>
  );
}
