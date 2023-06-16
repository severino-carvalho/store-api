import { HiChevronDown } from "react-icons/hi";
import { ISystemDropdownDTO } from "../../../../dtos/ISideBarDTOs";

interface systemDropdownProps {
  selected: string | null;
  changeFunc: (index: string) => void;
  item: ISystemDropdownDTO;
}

export default function UpperSystemDropdown(props: systemDropdownProps) {
  const { changeFunc, item, selected } = props;

  return (
    <button
      className={`flex items-center py-2 hover:drop-shadow-md shadow-black transition hover:scale-x-105 hover:translate-x-2 ${
        selected === item.key
          ? "text-primary-0c66a4 hover:text-primary-hover"
          : "text-neutral-5a5 hover:text-neutral-900"
      }`}
      onClick={() => changeFunc(item.key)}
    >
      <HiChevronDown
        className={`text-xl transition-all duration-300 ${
          selected === item.key ? "rotate-180" : "rotate-0"
        }`}
      />
      <item.icon className="ml-px text-[24px]" />
      <h1 className="ml-1 text-sm font-bold capitalize">{item.label}</h1>
    </button>
  );
}
