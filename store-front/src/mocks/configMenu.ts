import { BsBrightnessHigh } from "react-icons/bs";
import { IoStarOutline } from "react-icons/io5";
import {
  MdOutlineSettings,
  MdOutlineSettingsInputComposite,
} from "react-icons/md";
import { IConfigMenu } from "../dtos/ISideBarDTOs";

export const configMenu: IConfigMenu = {
  menu: [
    {
      label: "Definições",
      icon: MdOutlineSettingsInputComposite,
      key: "00-00",
      options: [
        {
          label: "Modo de exibição",
          icon: BsBrightnessHigh,
          key: "00-01",
          visible: true,
        },
        {
          label: "Configurações",
          icon: MdOutlineSettings,
          key: "00-02",
          visible: true,
        },
      ],
    },
  ],
};
