'use client'

import { FC } from "react";
import { Dropdown } from "./Dropdown"

interface Item {
    key: string;
    label: string;
    href?: string;
}

export const DropdownArbolesNacimiento: FC = () => {
    const items = [
    {
      key: "conservadores",
      label: "Árboles conservadores de Agua",
      href: "https://www.bosquesdecolombia.com/es/arboles-conservadores-de-agua"
    },
    {
      key: "semillas",
      label: "Semilla Forestales y Frutales",
      href: "https://www.bosquesdecolombia.com/es/semillas-forestales-y-frutales"
    },
    {
      key: "hidroretenedores",
      label: "Hidroretenedores de Agua",
      href: "https://www.bosquesdecolombia.com/es/hidroretenedores-de-agua"
    }
    
  ];

  return (
    <Dropdown buttonTitle="Árboles Protectores de Nacimientos de Agua" items={items} />
  )
}