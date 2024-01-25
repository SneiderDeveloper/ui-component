'use client'

import { 
  Dropdown as DropdownContainer, 
  DropdownTrigger, DropdownMenu, 
  DropdownItem, DropdownSection 
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { FC, useEffect, useState, useMemo } from "react";
import { ChevronDown } from "./Icons.tsx";
// import { Avatar } from "@nextui-org/avatar";
import { User } from "@nextui-org/user";
import { DropdownProps, Item } from "./interfaces/dropdown.interface.ts"; 

export const Dropdown: FC<DropdownProps> = ({ 
  title, 
  items=[],
  user,
  dropdown,
  dropdownItem,
  dropdownMenu,
  dropdownSection,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false)
  // const [bgColor, setBgColor] = useState("white");
  const [disabledItems, setDisabledItems] = useState([])
  const [selectedKeys, setSelectedKeys] = useState(["1"]);

  const handleItemClick = (href?: string) => {
    if (href) {
      setIsOpen(false);
      window.location.href = href;
    }
  };

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
    setIsHovered(false);
  }

  
  const toggleDropdown = (open: boolean) => {
    setIsOpen(open);
  }

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
      .map(item => String(item?.key))
    return disabledElementKeys
  }

  const selectedValue = useMemo(
    () => {
      const selectList: string[] = []
      items.map(item => {
        if (Array.from(selectedKeys).includes(String(item?.key))) {
          selectList.push(item?.label)
        }
      })
      return selectList.join(", ")
    },
      [selectedKeys]
  );
  
  useEffect(() => {
    setDisabledItems(filterKeysFromDisabled(items))
  }, [items])

  return (
    <DropdownContainer  
      { ...dropdown }
    >
      <DropdownTrigger>
        {
          user ? (
            <User
              as="button"
              avatarProps={{
                isBordered: true,
                src: user?.avatar ,
              }}
              name={ user?.name }
              description={ user?.description }
            />
          ) : (
            <Button 
              color={ dropdownItem?.color }
              variant={ dropdownMenu?.variant }
              endContent={ dropdown ? false : icons.chevron }
              onClick={ handleButtonClick }
              // onMouseEnter={() => toggleDropdown(true)} 
              // onMouseLeave={() => toggleDropdown(false)}
              className="p-4"
            >
              { dropdownMenu?.selectionMode ? selectedValue : title }
            </Button>
          )
        }
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Dynamic Actions" 
        // items={items}
        { ...dropdownMenu }
        disabledKeys={ disabledItems }
        disallowEmptySelection
        selectedKeys={ selectedKeys }
        onSelectionChange={ setSelectedKeys }
      >
        {items.map(item => (
          <DropdownSection { ...dropdownSection }>
              <DropdownItem 
                key={ item?.key } 
                // onClick={() => handleItemClick(item)}
                { ...item }
              >
                { item.label }
              </DropdownItem> 
          </DropdownSection>
        ))}
      </DropdownMenu>
    </DropdownContainer>
  );
};

