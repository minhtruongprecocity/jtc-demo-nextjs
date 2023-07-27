import { BooksResult } from "@/types/Book";

const BASE_URL = "https://gutendex.com";

export const getBooks = async () => {
  return getBooksWithUrl(`${BASE_URL}/books`);
};

export const getBooksWithUrl = async (url: string) => {
  let response = await fetch(url);
  let books = (await response?.json()) as BooksResult;

  return books;
};
