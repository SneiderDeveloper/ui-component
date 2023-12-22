'use client'

import { Dropdown as DropdownContainer, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";

export const Dropdown = () => {
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

  const handleItemClick = (url: string) => {
    window.location.href = url;
  }

  return (
    <DropdownContainer>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
        >
          Quiénes Somos
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions" items={items}>
        {(item) => (
          <DropdownItem
            key={item.key}
            onClick={() => handleItemClick(item.url)}
          >
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </DropdownContainer>
  );
}
