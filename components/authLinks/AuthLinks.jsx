"use client";
import React, { useState } from "react";
import Link from "next/link";
import TeamToggle from "../teamToggle/TeamToggle";
import { RxHamburgerMenu } from "react-icons/rx";
export default function AuthLinks() {
  const [open, setOpen] = useState(true);
  const status = "notauthenticated";

  return (
    <>
      {status === "notauthenticated" ? (
        <div className="flex items-center gap-[15px] ">
          <Link href="/login" className="">
            Login
          </Link>
          <RxHamburgerMenu
            className="md:hidden"
            onClick={() => setOpen((prevState) => !prevState)}
          />
        </div>
      ) : (
        <div className="flex items-center gap-[15px] ">
          <Link href="/write" className="">
            Write
          </Link>
          <Link href="/logout" className="">
            Logout
          </Link>
          <RxHamburgerMenu
            className="md:hidden"
            onClick={() => setOpen((prevState) => !prevState)}
          />
        </div>
      )}
      {open ? (
        <ul
          className={`md:hidden fixed top-0 right-0 bottom-0 pt-8 w-[225px] text-right gap-[10px] flex flex-col bg-softBg`}
        >
          <li className="flex justify-end pr-3 mb-5">
            <RxHamburgerMenu
              className="md:hidden"
              onClick={() => setOpen((prevState) => !prevState)}
            />
          </li>
          <li className="">
            <Link href="/" className="">
              HomePage
            </Link>
          </li>
          <li className="">
            <Link href="/contact" className="">
              Contact
            </Link>
          </li>
          <li className="">
            <Link href="/about" className="">
              About
            </Link>
          </li>
        </ul>
      ) : (
        <></>
      )}
    </>
  );
}
