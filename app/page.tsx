export default function Home() {
  return (
    <div className="container mx-auto p-5">
      <div className="grid md:grid-cols-2 gap-5 lg:gap-10">
        <a href="/companies" className="group bg-white inline-block hover:bg-gray-50 shadow-sm">
          <img
            src="https://picsum.photos/seed/company-annual/640/480"
            alt="static page"
            className="object-cover w-full h-48 md:h-auto"
          />
          <div className="text-lg font-bold  p-4">
            <span className="group-hover:underline text-blue-950">List of Companies</span>
            <div className="text-sm font-normal">Static</div>
          </div>
        </a>

        <a href="/books" className="group bg-white inline-block hover:bg-gray-50 shadow-sm">
          <img
            src="https://picsum.photos/seed/books/640/480"
            alt="static page"
            className="object-cover w-full h-48 md:h-auto"
          />
          <div className="text-lg font-bold  p-4">
            <span className="group-hover:underline text-blue-950">Project Gutenburg Books</span>
            <div className="text-sm font-normal">Dynamic</div>
          </div>
        </a>
      </div>
    </div>
  );
}
