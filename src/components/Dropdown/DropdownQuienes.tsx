'use client'

import { FC } from "react";
import { Dropdown } from "./Dropdown"

interface Item {
    key: string;
    label: string;
    url: string;
}

export const DropdownQuienes: FC = () => {
    const items = [
    {
      key: "mision",
      label: "Misión",
      url: "https://www.bosquesdecolombia.com/es/quienes-somos/mision"
    },
    {
      key: "vision",
      label: "Visión",
      url: "https://www.bosquesdecolombia.com/es/quienes-somos/vision"
    },
    {
      key: "objetivos",
      label: "Objetivos",
      url: "https://www.bosquesdecolombia.com/es/quienes-somos/objetivos"
    },
    {
      key: "interes",
      label: "Sitios de Interés",
      url: "https://www.bosquesdecolombia.com/es/sitios-de-interes"
    }
  ];

  return (
    <Dropdown buttonTitle="Quiénes Somos" items={items} />
  )
}