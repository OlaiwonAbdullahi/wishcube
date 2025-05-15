"use client";
import { ReactNode } from "react";
import { AuthProvider } from "./AuthContext";

interface ProvidersProps {
  children: ReactNode;
}

// Root providers wrapper
export default function Providers({ children }: ProvidersProps) {
  return <AuthProvider>{children}</AuthProvider>;
}
