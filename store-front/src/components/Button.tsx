import { IconType } from "react-icons";

interface buttonProps {
  icon: IconType;
  iconStyle?: string;

  label?: string;

  buttonStyle?: string;

  onClick?: () => any;
}

export default function Button(props: buttonProps) {
  return (
    <button
      className={`flex h-full rounded items-center shadow shadow-black grow-0 shrink-0
        ${props.buttonStyle || "py-2 px-4"}
        text-white-fff bg-primary-0c66a4 
        transition duration-300 hover:bg-sky-900 ease
        active:scale-95 font-medium
      `}
      onClick={props.onClick}
    >
      <props.icon className={`${props.iconStyle}`} />
      {props.label ? <h1 className="ml-1.5 text-sm">{"text"}</h1> : <></>}
    </button>
  );
}
