import { IconType } from "react-icons";

interface userItemProps {
  icon?: IconType;
  label: string;
  labelStyle?: string;

  onClick?: () => any;
}

export default function UserItem(props: userItemProps) {
  return (
    <button
      className={`flex flex-row py-2 px-6 items-center hover:bg-primary-0c66a4 hover:text-white-fff justify-end ${
        props.labelStyle || "capitalize"
      }`}
      onClick={props.onClick}
    >
      <p className="mr-2">{props.label}</p>
      {props.icon ? <props.icon /> : <></>}
    </button>
  );
}
