"use client";

import { getBooks, getBooksWithUrl } from "@/api/books";
import { BooksTable } from "@/components/BooksTable";
import { Container } from "@/components/Container";
import { BooksResult } from "@/types/Book";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Page() {
  const [books, setBooks] = useState<BooksResult>();
  const [loading, setLoading] = useState(false);

  async function changePage(url: string) {
    setLoading(true);
    const data = await getBooksWithUrl(url);
    setBooks(data);
    setLoading(false);
  }

  useEffect(() => {
    document.title = "Books";
    async function getData() {
      setLoading(true);
      const data = await getBooks();
      setBooks(data);
      setLoading(false);
    }

    getData();
  }, []);

  if (loading) return <h1 className="text-lg">Loading...</h1>;

  return (
    <Container>
      {books ? (
        <h1>
          <div className="flex flex-row gap-4 justify-end">
            <button
              onClick={() => changePage(books.previous)}
              className="p-4 hover:underline disabled:opacity-50 disabled:hover:no-underline"
              disabled={!books.previous}
            >
              Prev
            </button>
            <button onClick={() => changePage(books.next)} className="p-4 hover:underline" disabled={!books.next}>
              Next
            </button>
          </div>
          <BooksTable books={books.results} />
          <div className="flex flex-row gap-4 justify-end">
            <button
              onClick={() => changePage(books.previous)}
              className="p-4 hover:underline disabled:opacity-50 disabled:hover:no-underline"
              disabled={!books.previous}
            >
              Prev
            </button>
            <button onClick={() => changePage(books.next)} className="p-4 hover:underline" disabled={!books.next}>
              Next
            </button>
          </div>
        </h1>
      ) : null}
    </Container>
  );
}
