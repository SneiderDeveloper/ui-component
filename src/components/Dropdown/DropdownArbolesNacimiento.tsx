'use client'

import { FC } from "react";
import { Dropdown } from "./Dropdown"

interface Item {
    key: string;
    label: string;
    url: string;
}

export const DropdownArbolesNacimiento: FC = () => {
    const items = [
    {
      key: "conservadores",
      label: "Árboles conservadores de Agua",
      url: "https://www.bosquesdecolombia.com/es/arboles-conservadores-de-agua"
    },
    {
      key: "semillas",
      label: "Semilla Forestales y Frutales",
      url: "https://www.bosquesdecolombia.com/es/semillas-forestales-y-frutales"
    },
    {
      key: "hidroretenedores",
      label: "Hidroretenedores de Agua",
      url: "https://www.bosquesdecolombia.com/es/hidroretenedores-de-agua"
    }
    
  ];

  return (
    <Dropdown buttonTitle="Árboles Protectores de Nacimientos de Agua" items={items} />
  )
}