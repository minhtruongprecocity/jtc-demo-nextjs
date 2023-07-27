"use client";

import { useRouter } from "next/navigation";

export function BackButton() {
  const router = useRouter();

  return (
    <button className="mb-4 py-2 block text-blue-950" onClick={() => router.back()}>
      &lt; <span className="hover:underline">Back</span>
    </button>
  );
}
