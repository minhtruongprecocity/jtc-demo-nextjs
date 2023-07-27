interface Props {
  checked: boolean;
  offLabel: string;
  onLabel: string;
  onClick: () => void;
  className?: string;
}

export function Toggle({ checked, offLabel, onLabel, onClick, className }: Props) {
  return (
    <label className={`inline-flex items-center p-2 rounded-md cursor-pointer text-sm ${className}`}>
      <input id="toggle" type="checkbox" className="hidden peer" onClick={onClick} />
      <span className="px-4 py-1 rounded-l-sm bg-blue-900 peer-checked:bg-gray-300 text-white peer-checked:text-black">
        {offLabel}
      </span>
      <span className="px-4 py-1 rounded-r-sm bg-gray-300 peer-checked:bg-blue-900 peer-checked:text-white text-black">
        {onLabel}
      </span>
    </label>
  );
}
