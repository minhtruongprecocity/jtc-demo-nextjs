import { Book } from "@/types/Book";
import Link from "next/link";

interface Props {
  books: Array<Book>;
}
export function BooksTable({ books }: Props) {
  return (
    <div className="grid gap-5 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 shadow-sm">
      {books.map((book) => (
        <Link
          href={`/books/${book.id}`}
          className="flex flex-row items-start justify-start gap-4 bg-white p-4 shadow-sm hover:bg-gray-50"
        >
          {book.formats?.["image/jpeg"] ? (
            <img
              src={book.formats["image/jpeg"]}
              alt={`${book.title} cover`}
              className="w-36 max-h-48 object-contain"
            />
          ) : null}

          <div className="flex-1">
            <div className="text-sm text-gray-500">{book.authors?.[0]?.name}</div>
            <div className="text-md font-bold lg:text-lg sm:text-md">{book.title}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
