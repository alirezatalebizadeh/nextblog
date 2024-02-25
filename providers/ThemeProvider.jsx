"use client";
import { ThemeProvider } from "next-themes";
import React, { useContext } from "react";

export default function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
