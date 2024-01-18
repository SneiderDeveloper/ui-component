'use client'

import { Dropdown as DropdownContainer, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { FC, useState } from "react";
import { ChevronDown } from "./Icons.tsx";


interface Item {
  key?: string;
  label?: string;
  href?: string;
}

interface Options {
  selectionMode: string;
  unhover: boolean;
}

interface DropdownProps {
  buttonTitle: string;
  items: Item[];
  commonStyle?: object; 
  options: Options;
}


export const Dropdown: FC<DropdownProps> = ({buttonTitle, items, commonStyle, options}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false)
  const [bgColor, setBgColor] = useState("white");

  const handleItemClick = (href?: string) => {
    if (href) {
    window.location.href = href;
    setIsOpen(false);
    }
  };

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
    setIsHovered(false);
  }

  const handleButtonHover = (hover: boolean) => {
    if (options.unhover) {
      setIsHovered(hover);
    } else {
      toggleDropdown(hover);
      setIsHovered(hover);
    }
  }

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
      <DropdownMenu aria-label="Dynamic Actions" items={items} >
        {(item) => (
          <DropdownItem key={item.key} onClick={() => handleItemClick(item.href)}>
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </DropdownContainer>
  );
};

