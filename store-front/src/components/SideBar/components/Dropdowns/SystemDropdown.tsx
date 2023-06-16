import { HiChevronDown } from "react-icons/hi";
import { IDropdownDTO } from "../../../../dtos/ISideBarDTOs";

interface dropdownProps {
  selected: string | null;
  changeFunc: (index: string) => void;
  item: IDropdownDTO;
}

export default function SystemDropdown(props: dropdownProps) {
  const { changeFunc, item, selected } = props;

  return (
    <button
      className={`flex items-center py-2 font-medium hover:drop-shadow-md shadow-black transition hover:scale-x-105 hover:translate-x-2 ${
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
      <item.icon className="ml-px text-[22px]" />
      <h1 className="capitalize ml-1 text-sm">{item.label}</h1>
    </button>
  );
}
