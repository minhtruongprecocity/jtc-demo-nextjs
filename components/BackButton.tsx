"use client";

export function BackButton() {
  return (
    <button className="mb-4 py-2 block text-blue-950" onClick={() => history.back()}>
      &lt; <span className="hover:underline">Back</span>
    </button>
  );
}
