export interface Company {
  id: string;
  companyId: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  description: string;
  contact: string;
  contactPhone: string;
  annualSales: number;
}

export function toCompany(obj: any): Company {
  return {
    ...obj,
    companyId: obj.company_id,
    contactPhone: obj.contact_phone,
    annualSales: obj.annual_sales,
  } as Company;
}

export function toCompanies(obj: Array<any>): Array<Company> {
  return obj?.map((c) => toCompany(c));
}
