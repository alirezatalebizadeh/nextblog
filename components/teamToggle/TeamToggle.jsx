"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { ThemeContext } from "@/context/teameToggle";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

export default function TeamToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <Image
        src=""
        width={14}
        height={14}
        alt="darkMode Icon"
        priority={false}
      />
    );

  if (resolvedTheme === "dark") {
    return <FiSun onClick={() => setTheme("light")} />;
  }
  if (resolvedTheme === "light") {
    return <FiMoon onClick={() => setTheme("dark")} />;
  }
}
