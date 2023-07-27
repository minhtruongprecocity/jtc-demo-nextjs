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
      page: { limit: 100 },
      order_by: "name_ASC",
    })) ?? [];
  return toCompanies(resp);
}

export default async function Page() {
  const companies = await getCompanies();

  return (
    <Container>
      <Companies title="All Companies" data={companies} altLinkRoute="/companies" altLinkTitle="View Top 10" />
    </Container>
  );
}
