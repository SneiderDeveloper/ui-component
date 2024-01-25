'use client'

import { 
  Dropdown as DropdownContainer, 
  DropdownTrigger, DropdownMenu, 
  DropdownItem, DropdownSection 
} from '@nextui-org/dropdown';
import { Button } from '@nextui-org/button';
import { FC, useEffect, useState, useMemo } from 'react';
import { ChevronDown } from './Icons.tsx';
// import { Avatar } from '@nextui-org/avatar';
import { User } from '@nextui-org/user';
import { DropdownProps, Section, Item } from './interfaces/dropdown.interface.ts';
import { extractElements } from './helpers/extractElements.ts';
import { filterKeysFromDisabled } from './helpers/filterKeysFromDisabled.ts';
import { getSelectedLabels } from './helpers/getSelectedLabels.ts';

export const Dropdown: FC<DropdownProps> = ({ 
  title, 
  sections=[],
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
        rotate={ isOpen ? 180 : 0 }
        className="ml-2"
      />
    ),  
  };

  const selectedValue = useMemo(
    () => {
      return getSelectedLabels({ sections, selectedKeys })
    },
    [selectedKeys]
  );
  
  useEffect(() => {
    setDisabledItems(filterKeysFromDisabled(sections))
  }, [])

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
                color={ dropdownItem?.color as "primary" | "secondary" | "success" | "warning" | "danger" | "default" | undefined }
                variant={ dropdownMenu?.variant }
                endContent={ dropdown ? false : icons.chevron }
                onClick={ handleButtonClick }
                // onMouseEnter={() => toggleDropdown(true)} 
                // onMouseLeave={() => toggleDropdown(false)}
                className="p-4"
              >
                { dropdownMenu?.selectionMode ? selectedValue || '' : title }
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
          onSelectionChange={ (keys: any) => setSelectedKeys(Array.from(keys as Iterable<string>)) }
          color={dropdownMenu?.color as "primary" | "secondary" | "success" | "warning" | "danger" | "default" | undefined}
          autoFocus={true} // Fix for problem 1
        >
          {sections.map((section: Section, index) => (
            <DropdownSection 
              key={ index } 
              title={ section?.titleSection }
              { ...dropdownSection }
            >
              {section?.items.map((item: Item) => (
                  <DropdownItem 
                    key={ item?.key } 
                    // onClick={() => handleItemClick(item)}
                    { ...item }
                  >
                    { item.label }
                  </DropdownItem>
              ))}
            </DropdownSection>
          ))}
        </DropdownMenu>
      </DropdownContainer>
    );
};

