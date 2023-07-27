"use client";

import { getBook } from "@/api/books";
import { BackButton } from "@/components/BackButton";
import { Container } from "@/components/Container";
import { Book, BookFormats } from "@/types/Book";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { book: string } }) {
  const [book, setBook] = useState<Book>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Book Details";

    async function getData(id: string) {
      setLoading(true);
      const data = await getBook(id);
      setBook(data);
      setLoading(false);
    }
    if (params) {
      getData(params.book);
    }
  }, [params]);

  if (loading)
    return (
      <Container>
        <h1 className="text-lg">Loading...</h1>
      </Container>
    );

  return (
    <Container>
      {book ? (
        <>
          <BackButton />

          <div className="flex flex-row gap-10">
            <img
              src={book.formats["image/jpeg"]}
              alt={`${book.title} cover`}
              className="max-h-72 w-48 object-contain mb-5"
            />
            <div className="flex-1">
              <div className="mb-5">
                <div className="text-2xl font-bold">{book.title}</div>
                {book.authors?.map((author) => (
                  <div key={author.name} className="text-md">
                    {author.name}
                  </div>
                ))}
              </div>

              <div className="mb-5">
                <div className="font-bold">Download Count</div>
                <div className="">{book.download_count}</div>
              </div>

              <div className="mb-5">
                <div className="font-bold">Subjects</div>
                {book.subjects?.map((subject) => (
                  <div key={subject} className="">
                    {subject}
                  </div>
                ))}
              </div>

              <div className="mb-5">
                <div className="font-bold">Downloads</div>
                {BookFormats.map((format) => (
                  <>
                    {book.formats[format.mimeType] ? (
                      <a href={book.formats[format.mimeType]} className="block text-blue-950 underline" target="_blank">
                        {format.name}
                      </a>
                    ) : null}
                  </>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </Container>
  );
}
