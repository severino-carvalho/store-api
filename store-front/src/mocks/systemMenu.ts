import { AiFillAccountBook, AiFillGift } from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { DiDrupal } from "react-icons/di";
import {
  FaBlackberry,
  FaFutbol,
  FaShippingFast,
  FaUmbrellaBeach,
} from "react-icons/fa";
import { GiBlackHoleBolas, GiGoldBar, GiKitchenKnives } from "react-icons/gi";
import { IoMdFootball } from "react-icons/io";
import {
  MdDiscount,
  MdOutlineManageSearch,
  MdOutlineSportsEsports,
  MdOutlineTableChart,
  MdSmartToy,
  MdSportsHandball,
} from "react-icons/md";
import { RiCoupon2Fill } from "react-icons/ri";
import { WiDaySunny } from "react-icons/wi";

import { ISystemMenu } from "../dtos/ISideBarDTOs";

export const systemMenu: ISystemMenu = {
  menu: [
    {
      label: "Categorias",
      icon: BiCategoryAlt,
      key: "00-00-00",
      options: [
        {
          label: "Esportes",
          icon: MdOutlineSportsEsports,
          key: "00-01-00",
          options: [
            {
              label: "Futebol",
              icon: FaFutbol,
              key: "00-01-01",
              visible: true,
            },
            {
              label: "Handebol",
              icon: MdSportsHandball,
              key: "00-01-02",
              visible: true,
            },
          ],
        },
        {
          label: "Praia",
          icon: FaUmbrellaBeach,
          key: "00-02-00",
          options: [
            {
              label: "Bolas",
              icon: IoMdFootball,
              key: "00-02-01",
              visible: true,
            },
          ],
        },
      ],
    },
    {
      label: "Novidades",
      icon: MdOutlineManageSearch,
      key: "01-00-00",
      options: [
        {
          label: "Do dia",
          icon: WiDaySunny,
          key: "03-01-00",
          options: [
            {
              label: "Talheres",
              icon: GiKitchenKnives,
              key: "03-01-01",
              visible: true,
            },
          ],
        },
      ],
    },
    {
      label: "Eventos",
      icon: MdOutlineTableChart,
      key: "02-00-00",
      options: [
        {
          label: "Cupons",
          icon: RiCoupon2Fill,
          key: "02-01-00",
          options: [
            {
              label: "Frete Grátis",
              icon: FaShippingFast,
              key: "01-01-01",
              visible: true,
            },
            {
              label: "Descontos",
              icon: MdDiscount,
              key: "01-01-02",
              visible: true,
            },
          ],
        },
      ],
    },
    {
      label: "Cliente Ouro",
      icon: GiGoldBar,
      key: "03-00-00",
      options: [
        {
          label: "Brindes",
          icon: AiFillGift,
          key: "02-01-00",
          options: [
            {
              label: "Pelúcia",
              icon: MdSmartToy,
              key: "02-01-01",
              visible: true,
            },
          ],
        },
      ],
    },
    {
      label: "Mercado Negro",
      icon: GiBlackHoleBolas,
      key: "04-00-00",
      options: [
        {
          label: "Drogras",
          icon: DiDrupal,
          key: "04-01-00",
          options: [
            {
              label: "Maconha",
              icon: AiFillAccountBook,
              key: "04-01-01",
              visible: true,
            },
            {
              label: "Crack",
              icon: AiFillAccountBook,
              key: "04-01-01",
              visible: true,
            },
            {
              label: "Cocaina",
              icon: AiFillAccountBook,
              key: "04-01-01",
              visible: true,
            },
            {
              label: "K9",
              icon: AiFillAccountBook,
              key: "04-01-01",
              visible: true,
            },
          ],
        },
        {
          label: "Mão de obra",
          icon: FaBlackberry,
          key: "04-02-00",
          options: [
            {
              label: "Africanos",
              icon: AiFillAccountBook,
              key: "04-02-01",
              visible: true,
            },
            {
              label: "Indígenas",
              icon: AiFillAccountBook,
              key: "04-02-02",
              visible: true,
            },
            {
              label: "Egípcios",
              icon: AiFillAccountBook,
              key: "04-02-03",
              visible: true,
            },
          ],
        },
      ],
    },
  ],
};
