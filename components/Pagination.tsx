interface Props {
  prevUrl: string;
  nextUrl: string;
  changePage: (url: string) => void;
}
export function Pagination({ prevUrl, nextUrl, changePage }: Props) {
  return (
    <div className="flex flex-row gap-4 justify-end">
      <button
        onClick={() => changePage(prevUrl)}
        className="p-4 hover:underline disabled:opacity-50 disabled:hover:no-underline"
        disabled={!prevUrl}
      >
        Prev
      </button>
      <button
        onClick={() => changePage(nextUrl)}
        className="p-4 hover:underline disabled:hover:no-underline"
        disabled={!nextUrl}
      >
        Next
      </button>
    </div>
  );
}
