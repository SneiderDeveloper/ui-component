'use client'

import { Dropdown as DropdownContainer, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { FC } from "react";




interface Item {
  key: string;
  label: string;
  url: string;

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
  const handleItemClick = (url: string) => {
    window.location.href = url;
  }
  const linkStyle: React.CSSProperties = {
    ...commonStyle,
    border: '1px solid #ccc', 
    padding: '8px 12px',    
    borderRadius: '10px',     
  };
  return (
    <DropdownContainer>
      <DropdownTrigger>
        <Button style={linkStyle}
          
        >
          {buttonTitle} 
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
        )

        }
      </DropdownMenu>
    </DropdownContainer>
  )
}
