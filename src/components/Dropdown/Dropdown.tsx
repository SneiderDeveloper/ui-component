'use client'

import { 
  Dropdown as DropdownContainer, 
  DropdownTrigger, DropdownMenu, 
  DropdownItem, DropdownSection 
} from '@nextui-org/dropdown';
import { Button } from '@nextui-org/button';
import { FC, useEffect, useState, useMemo } from 'react';
import { ChevronDown } from './Icons.tsx';
import { User } from '@nextui-org/user';
import { DropdownProps, Section, Item } from './interfaces/dropdown.interface.ts';

import { filterKeysFromDisabled } from './helpers/filterKeysFromDisabled.ts';
import { getSelectedLabels } from './helpers/getSelectedLabels.ts';

export const Dropdown: FC<DropdownProps> = ({ 
  title, 
  sections=[{items: []}],
  user,
  dropdown,
  dropdownItem,
  dropdownMenu,
  dropdownSection,
  
}) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isHovered, setIsHovered] = useState(false)
  const [disabledItems, setDisabledItems] = useState([])
  const [selectedKeys, setSelectedKeys] = useState(new Set(['2']));

  
  const toggleDropdown = (open: boolean) => {
    setIsOpen(open);
  }

  const icons = {
    chevron: (
      <ChevronDown
        fill="currentColor" 
        size={ 18 }
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
        onOpenChange={ toggleDropdown }
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
                // onClick={ handleButtonClick }
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
          { ...dropdownMenu }
          aria-label='dropdown-menu'
          disabledKeys={ disabledItems }
          selectedKeys={ selectedKeys }
          onSelectionChange={ setSelectedKeys }
        >
          {sections.map((section: Section, index) => (
            <DropdownSection 
              key={ index } 
              title={ section?.titleSection }
              { ...dropdownSection }
            >
              {
                section?.items 
                ? section.items.map((item: Item) => (
                    <DropdownItem
                      key={ item.id }
                      { ...item }
                    >
                      { item.label }
                    </DropdownItem>
                ))
                : <DropdownItem />
              }
            </DropdownSection>
          ))}
        </DropdownMenu>
      </DropdownContainer>
    );
};

