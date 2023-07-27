interface Props {
  currency: string;
  amount: number;
}
export function Currency({ currency, amount, ...otherProps }: Props) {
  const locale = "en-US";

  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });

  const formatted = formatter.format(amount);

  return <span {...otherProps}>{formatted}</span>;
}
