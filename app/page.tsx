import { cms } from "@/api/cms";
import { Container } from "@/components/Container";
import { Link } from "@/types/Link";
import Image from "next/image";

async function getContent() {
  const content = await cms.items.find("179426159", { nested: true, version: "current" });
  return content.links as Array<Link>;
}

export default async function Page() {
  const links = await getContent();

  return (
    <Container>
      <div className="grid md:grid-cols-2 gap-5 lg:gap-10">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.attributes.url}
            className="group bg-white inline-block hover:bg-gray-50 shadow-sm"
          >
            <img src={link.attributes.image_url} alt="static page" className="object-cover w-full h-48 md:h-auto" />
            <div className="text-lg font-bold  p-4">
              <span className="group-hover:underline text-blue-950">{link.attributes.title}</span>
              <div className="text-sm font-normal">{link.attributes.description}</div>
            </div>
          </a>
        ))}
      </div>
    </Container>
  );
}
