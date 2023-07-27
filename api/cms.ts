import { buildClient } from "@datocms/cma-client-browser";

export const cms = buildClient({ apiToken: process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN ?? "" });
