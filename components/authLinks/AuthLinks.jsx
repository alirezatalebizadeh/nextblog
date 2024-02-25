import React from "react";
import Link from "next/link";

export default function AuthLinks() {
  const status = "notauthenticated";

  return (
    <>
      {status === "authenticated" ? (
        <>
          <li>
            <Link href="/login">Login</Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link href="/write">Write</Link>
          </li>
          <li>
            <Link href="/logout">Logout</Link>
          </li>
        </>
      )}
    </>
  );
}
