'use client'

import { FC } from "react";
import { Dropdown } from "./Dropdown"

interface Item {
    key: string;
    label: string;
    href: string;
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
      href: "https://www.bosquesdecolombia.com/es/quienes-somos/vision"
    },
    {
      key: "objetivos",
      label: "Objetivos",
      href: "https://www.bosquesdecolombia.com/es/quienes-somos/objetivos"
    },
    {
      key: "interes",
      label: "Sitios de Interés",
      href: "https://www.bosquesdecolombia.com/es/sitios-de-interes"
    }
  ];

  return (
    <Dropdown buttonTitle="Quiénes Somos" items={items} />
  )
}