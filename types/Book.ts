export interface Book {
  copyright: boolean;
  download_count: number;
  id: number;
  languages: Array<string>;
  media_type: string;
  title: string;
  authors: Array<Author>;
  subjects: Array<string>;
  formats: any;
}

export interface Author {
  birth_year: number;
  death_year: number;
  name: string;
}

export interface BooksResult {
  count: number;
  next: string;
  previous: string;
  results: Array<Book>;
}
