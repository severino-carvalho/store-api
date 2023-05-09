import { IconType } from "react-icons";

interface IBaseDTO {
  label: string;
  icon: IconType;
  key: string;
}

export interface IItemDTO extends IBaseDTO {
  visible: boolean;
}

export interface IDropdownDTO extends IBaseDTO {
  options?: IItemDTO[];
  visible?: boolean;
}

export interface ISystemDropdownDTO extends IBaseDTO {
  options: IDropdownDTO[];
}

export interface IConfigMenu {
  menu: IDropdownDTO[];
}

export interface ISystemMenu {
  menu: ISystemDropdownDTO[];
}
