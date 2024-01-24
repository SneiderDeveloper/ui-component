'use client'

import { Dropdown as DropdownContainer, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { FC, useState } from "react";
import { ChevronDown } from "./Icons.tsx";
import { Avatar } from "@nextui-org/avatar";
import { User } from "@nextui-org/user";

// Se establecen las props o interfaces de cada objeto
//Props de los items que se guardaran como opciones en el dropdown
interface Item {
  key?: string;
  label?: string;
  href?: string;
}
//
interface Options {
  selectionMode: string;
  unhover: boolean;
}
//Props que serán solicitadas para habilitar la interface dropdown en pantalla.
interface DropdownProps {
  buttonTitle: string;
  items: Item[];
  commonStyle?: object; 
  options: Options;
}
//Se desarrolla la lógica en el componente
export const Dropdown: FC<DropdownProps> = ({buttonTitle, items, commonStyle, options}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false)
  const [bgColor, setBgColor] = useState("white");
  //Se establece el algoritmo para redirigirse a link inyectado en href
  const handleItemClick = (href?: string) => {
    if (href) {
    window.location.href = href;
    setIsOpen(false);
    }
  };
  //Se crea constante para abrir o cerrar el Dropdown dando click
  const handleButtonClick = () => {
    setIsOpen(!isOpen);
    setIsHovered(false);
  }
  //Se confirma que pasa al activar el estado setIsOpen.
  const toggleDropdown = (open: boolean) => {
    setIsOpen(open);
  }
  const linkStyle: React.CSSProperties = {
    padding: '8px 12px',    
    borderRadius: '10px',
    color: 'black',
    fontSize: '16px',
    ...commonStyle,
  };
  const icons = {
    chevron: (
      <ChevronDown
        fill="currentColor" 
        size={18}
        rotate={isOpen ? 180 : 0}
        className="ml-2"
      />
    ),  
  };
  //Se establece el renderizado final y sus efectos
  return (
    <DropdownContainer 
      isOpen={isOpen} 
      onMouseEnter={() => toggleDropdown(true)} 
      onMouseLeave={() => toggleDropdown(false)}
    >
      <DropdownTrigger>
          <Button 
            variant="bordered"
            style={linkStyle} 
            endContent={icons.chevron}
            onClick={handleButtonClick}
            onMouseEnter={() => toggleDropdown(true)} 
            onMouseLeave={() => toggleDropdown(false)}
          >
            {buttonTitle}
          </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Dynamic Actions" items={items}
        style={{ background: "auto", border: '1px solid lightgray', borderRadius: '10px', color: "borde-gray-300"}} 
        >
        {(item) => (
        <DropdownItem 
          key={item.key} 
          onClick={() => handleItemClick(item.href)}
          className="border border-gray-300 p-2"
          >
          {item.label}
        </DropdownItem>
        )}
      </DropdownMenu>
    </DropdownContainer>
  );
};

