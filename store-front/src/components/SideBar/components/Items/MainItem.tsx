import { IItemDTO } from "../../../../dtos/ISideBarDTOs";

interface itemProps {
  selected: string | null;
  changeFunc: (index: string) => void;
  item: IItemDTO;
}

export default function MainItem({ changeFunc, item, selected }: itemProps) {
  return (
    <button
      className={`flex items-center py-2 transition hover:scale-x-105 hover:translate-x-1.5 hover:drop-shadow-md shadow-black max-w-[236px] ${
        selected === item.key
          ? "text-primary-0c66a4 hover:text-primary-hover"
          : "text-neutral-5a5 hover:text-neutral-900"
      }`}
      onClick={() => changeFunc(item.key)}
    >
      <item.icon className="text-xl" />
      <a href="#" className="ml-1 text-sm max-w-[210px] capitalize">
        {item.label}
      </a>
    </button>
  );
}
