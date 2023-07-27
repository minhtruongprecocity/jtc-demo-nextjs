import { cms } from "@/api/cms";
import { Currency } from "@/components/Currency";
import { toCompany } from "@/types/Company";
import { Metadata } from "next";

async function getCompany(id: string) {
  return toCompany(await cms.items.find(id));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getCompany(params.company);

  return {
    title: data.name,
  };
}

export async function generateStaticParams() {
  const companies =
    (await cms.items.list({
      filter: {
        type: "company",
      },
      page: { limit: 100 },
    })) ?? [];

  return companies.map((company) => ({
    company: company.id,
  }));
}

interface Props {
  params: {
    company: string;
  };
}

export default async function Page({ params }: Props) {
  const data = await getCompany(params.company);

  return (
    <div className="container mx-auto p-5">
      <a href="/companies" className="mb-4 py-2 block text-blue-950">
        &lt; <span className="hover:underline">Back</span>
      </a>

      <div className="flex gap-4">
        <div className="w-full">
          <div className="flex items-center flex-col sm:flex-row">
            <div className="flex-1 w-full">
              <div className="text-2xl font-bold">{data.name}</div>
              <div>
                {data.address}, {data.city}, {data.state}
                {data.zip}
              </div>
            </div>
            <div className="text-xl w-full mt-2 sm:w-auto sm:mt-0">
              <Currency currency="USD" amount={data.annualSales} />
            </div>
          </div>
        </div>
      </div>

      <hr className="my-8" />

      <div className="leading-7 mb-8">{data.description}</div>

      <hr className="my-8" />

      <div className="flex gap-4 items-center">
        <img
          src={`https://robohash.org/${data.id}.png?size=100x100`}
          alt={data.contact}
          className="rounded-full shadow-sm bg-blue-900"
        />
        <div className="mb-4">
          <div className="text-lg font-bold">{data.contact}</div>
          <div>{data.contactPhone}</div>
        </div>
      </div>
    </div>
  );
}
