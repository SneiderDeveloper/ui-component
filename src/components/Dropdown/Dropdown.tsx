'use client'

import { Dropdown as DropdownContainer, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { FC, useEffect, useState } from "react";
import { ChevronDown } from "./Icons.tsx";
// import { Avatar } from "@nextui-org/avatar";
import { User } from "@nextui-org/user";

// Se establecen las props o interfaces de cada objeto

//Props de los items que se guardaran como opciones en el dropdown
interface Item {
  id: string | number;
  label: string;
  href: string;
  shortcut?: string;
  startContent?: string;
  disabled?: boolean;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | undefined;
  className?: string;
}

interface Options {
  selectionMode: string;
  unhover: boolean;
}

interface CommonStyle {
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | undefined;
  variant?: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | undefined;
  className?: string;
}

interface Avatar {
  name?: string;
  avatar?: string;
  description?: string;
}


interface DropdownProps {
  title: string;
  items: Item[];
  user?: Avatar;
  commonStyle?: CommonStyle; 
  options: Options;
}

export const Dropdown: FC<DropdownProps> = ({ 
  title, 
  items,
  // isAvatar,
  user,
  commonStyle,
  options 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false)
  const [bgColor, setBgColor] = useState("white");
  const [disabledItems, setDisabledItems] = useState([])

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

  const filterKeysFromDisabled = (items: Item[]) => {
    const disabledElementKeys: any = items
      .filter(item => item?.disabled === true)
      .map(item => String(item?.id))
    return disabledElementKeys
  }
  
  useEffect(() => {
    setDisabledItems(filterKeysFromDisabled(items))
  }, [items])

  return (
    <DropdownContainer  backdrop="blur">
      <DropdownTrigger>
        {
          user ? (
            <User
              as="button"
              avatarProps={{
                isBordered: true,
                src: user?.avatar ,
              }}
              // className="transition-transform"
              name={ user?.name }
              description={ user?.description }
            />
          ) : (
            <Button 
              color={ commonStyle?.color }
              variant={ commonStyle?.variant }
              // style={linkStyle} 
              endContent={ icons.chevron }
              onClick={ handleButtonClick }
              // onMouseEnter={() => toggleDropdown(true)} 
              // onMouseLeave={() => toggleDropdown(false)}
              className="p-4"
            >
              { title }
            </Button>
          )
        }
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Dynamic Actions" 
        // items={items}
        variant={ commonStyle?.variant }
        disabledKeys={ disabledItems }
      >
        {items.map(item => (
          <DropdownItem 
            key={ item?.id } 
            onClick={() => handleItemClick(item?.href)}
            shortcut={ item?.shortcut }
            startContent={ item?.startContent }
            className={ item?.className }
            color={ item?.color }
          >
            { item.label }
          </DropdownItem> 
        ))}
      </DropdownMenu>
    </DropdownContainer>
  );
};

