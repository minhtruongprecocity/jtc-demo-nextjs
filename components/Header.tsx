"use client";

import { usePathname } from "next/navigation";

export function Header() {
  const pathName = usePathname();

  return (
    <div className="flex items-center bg-teal-200 py-4">
      <div className="flex flex-row items-center gap-4 text-blue-950 sm:gap-10 container mx-auto p-5">
        <a href="/" className="text-2xl font-bold flex-1">
          JTC Demo
          <div className="text-sm font-normal">Next.js</div>
        </a>

        <a
          href="/companies"
          className={`text-lg hover:underline ${pathName.startsWith("/companies") ? "underline" : ""}`}
        >
          Companies
        </a>
        <a href="/books" className={`text-lg hover:underline ${pathName === "/books" ? "underline" : ""}`}>
          Books
        </a>
      </div>
    </div>
  );
}
