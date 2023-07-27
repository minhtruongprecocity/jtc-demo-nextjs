"use client";

import { Company } from "@/types/Company";
import { CompanyGrid } from "./CompanyGrid";
import { CompanyList } from "./CompanyList";
import { useState } from "react";
import { Toggle } from "./Toggle";

interface Props {
  title: string;
  data: Array<Company>;
  altLinkTitle: string;
  altLinkRoute: string;
}

export function Companies({ title, data: companies, altLinkTitle, altLinkRoute }: Props) {
  const [viewAsList, setViewAsList] = useState(false);

  return (
    <>
      <div className="flex items-center mb-4 justify-end flex-row">
        <h1 className="text-2xl font-bold flex-1">{title}</h1>
        <a href={altLinkRoute} className="hover:underline mr-0 text-blue-950 sm:mr-5">
          {altLinkTitle}
        </a>
        <Toggle
          className="justify-end hidden sm:flex"
          checked={viewAsList}
          offLabel="Grid"
          onLabel="List"
          onClick={() => setViewAsList(!viewAsList)}
        />
      </div>

      {viewAsList ? (
        <div className="grid gap-5 grid-cols-1">
          {companies.map((company) => (
            <CompanyList key={company.id} company={company} />
          ))}
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-3 sm:grid-cols-2">
          {companies.map((company) => (
            <CompanyGrid key={company.id} company={company} />
          ))}
        </div>
      )}
    </>
  );
}
