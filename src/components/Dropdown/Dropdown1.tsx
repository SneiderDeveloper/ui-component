'use client'

import { Dropdown as DropdownContainer, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { FC, useState } from "react";
import { ChevronDown } from "./Icons.tsx";


interface Item {
  map(arg0: (item: any) => import("react").JSX.Element): import("@react-types/shared").CollectionChildren<object>;
  children: Item;
  key?: string;
  label?: string;
  href?: string;
}

const commonStyle: React.CSSProperties = {
  fontSize: '16px', 
  fontFamily: 'Arial, sans-serif', 
  color: 'black',
};

interface DropdownProps {
  items: Item[];
}

export const Dropdown1: FC<DropdownProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleItemClick = (href?: string) => {
    if (href) {
      window.location.href = href;
      setIsOpen(false);
    }
  };

  const toggleDropdown = (open: boolean) => {
    setIsOpen(open);
  }
  
  const linkStyle: React.CSSProperties = {
    ...commonStyle,
    padding: '8px 12px',    
    borderRadius: '10px',
    color: 'black',
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

  return (
    <DropdownContainer 
      isOpen={isOpen} 
      onMouseEnter={() => toggleDropdown(true)} 
      onMouseLeave={() => toggleDropdown(false)}
    >
      <DropdownTrigger>
        <Button 
          style={linkStyle} 
          endContent={icons.chevron}
          onMouseEnter={() => toggleDropdown(true)}
          onMouseLeave={() => toggleDropdown(false)}
        >
          {items && items[0] && items[0].label}  
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions">
        {items && items[0] && items[0].children && items[0].children.map((item) => (  // Aquí se verifica que items[0].children exista antes de mapear sobre él
          <DropdownItem variant="bordered" key={item.key} onClick={() => handleItemClick(item.href)}>
            {item.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </DropdownContainer>
  );
};