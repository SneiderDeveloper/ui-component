'use client'

import { FC } from "react";
import { Dropdown } from "./Dropdown"

interface Item {
    key: string;
    label: string;
    url: string;
}

export const DropdownArboles: FC = () => {
    const items = [
    {
      key: "maderables",
      label: "Árboles Maderables",
      url: "https://www.bosquesdecolombia.com/es/arboles-maderables"
    },
    {
      key: "maderablesTemplado",
      label: "Árboles Maderables Templado",
      url: "https://www.bosquesdecolombia.com/es/arboles-maderables-templado"
    },
    {
      key: "ornamentales",
      label: "Árboles Ornamentales",
      url: "https://www.bosquesdecolombia.com/assets/media/slider2.jpg"
    },
    {
      key: "frutales",
      label: "Árboles Frutales",
      url: "https://www.bosquesdecolombia.com/es/arboles-frutales-templado"
    }
  ];

  return (
    <Dropdown buttonTitle="Árboles" items={items} />
  )
}