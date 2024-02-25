"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

export default function TeamToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    if (resolvedTheme === "dark") {
      return (
        <FiSun  onClick={() => setTheme("light")} />
      );
    }
    if (resolvedTheme === "light") {
      return <FiMoon onClick={() => setTheme("dark")} />;
    }
  }
}
