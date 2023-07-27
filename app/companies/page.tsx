import { cms } from "@/api/cms";
import { Companies } from "@/components/Companies";
import { Container } from "@/components/Container";
import { toCompanies } from "@/types/Company";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Companies",
};

async function getCompanies() {
  const resp =
    (await cms.items.list({
      filter: {
        type: "company",
      },
      page: { limit: 10 },
      order_by: "annual_sales_DESC",
    })) ?? [];
  return toCompanies(resp);
}

export default async function Page() {
  const companies = await getCompanies();

  return (
    <Container>
      <Companies title="Top 10" data={companies} altLinkRoute="/companies/all" altLinkTitle="View All" />
    </Container>
  );
}
