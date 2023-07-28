"use client";

import { getBooks, getBooksWithUrl } from "@/api/books";
import { BooksTable } from "@/components/BooksTable";
import { Container } from "@/components/Container";
import { Pagination } from "@/components/Pagination";
import { BooksResult } from "@/types/Book";
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

  if (loading)
    return (
      <Container>
        <h1 className="text-lg">Loading...</h1>
      </Container>
    );

  return (
    <Container>
      {books ? (
        <>
          <Pagination prevUrl={books.previous} nextUrl={books.next} changePage={changePage} />
          <BooksTable books={books.results} />
          <Pagination prevUrl={books.previous} nextUrl={books.next} changePage={changePage} />
        </>
      ) : null}
    </Container>
  );
}
