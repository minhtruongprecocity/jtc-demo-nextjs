import { Company } from "@/types/Company";
import { Currency } from "./Currency";

interface Props {
  company: Company;
}

export function CompanyList({ company }: Props) {
  return (
    <a
      href={`/companies/${company.id}`}
      className="cursor-pointer shadow-sm bg-white hover:bg-gray-50 group flex flex-col sm:flex-row"
    >
      <img
        src={`https://picsum.photos/seed/${company.id}/640/480`}
        alt={company.name}
        className="object-cover h-36 w-full lg:md-96 md:w-96"
      />
      <div className="p-3">
        <div className="font-bold text-lg group-hover:underline text-blue-950">{company.name}</div>
        <div className="text-sm mb-4">
          {company.city}, {company.state}
        </div>
        <Currency currency="USD" amount={company.annualSales} />
      </div>
    </a>
  );
}
