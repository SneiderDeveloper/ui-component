'use client'

import { Dropdown as DropdownContainer, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { FC, useState } from "react";
import { ChevronDown } from "./Icons.tsx";

interface Item {
  key: string;
  label: string;
  href?: string;

}
const commonStyle: React.CSSProperties = {
  fontSize: '18px', 
  fontFamily: 'Arial, sans-serif', 
  
};

interface DropdownProps {
  buttonTitle: string;
  items: Item[];

}

export const Dropdown: FC<DropdownProps> = ({buttonTitle, items}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleItemClick = (href: string) => {
    window.location.href = href;
    setIsOpen(false);
  };

  const toggleDropdown = (open: boolean) => {
    setIsOpen(open);
  }
  
  const linkStyle: React.CSSProperties = {
    ...commonStyle,
    padding: '8px 12px',    
    borderRadius: '10px',
    color: 'white'     
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
          {buttonTitle}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions" items={items}>
        {(item) => (
          <DropdownItem key={item.key} onClick={() => handleItemClick(item.href)}>
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </DropdownContainer>
  );
};

