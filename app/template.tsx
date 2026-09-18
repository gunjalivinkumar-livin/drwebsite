"use client";

import { ReactNode } from "react";

/**
 * app/template.tsx re-mounts on every navigation (unlike layout.tsx), which
 * gives every route a simple fade-in-up entrance without any extra
 * dependency or client-side router hooking.
 */
export default function Template({ children }: { children: ReactNode }) {
  return <div className="page-transition">{children}</div>;
}
