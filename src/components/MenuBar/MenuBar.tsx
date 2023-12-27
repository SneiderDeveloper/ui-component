'use client'

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, 
  DropdownItem, DropdownTrigger, Dropdown, DropdownMenu} from "@nextui-org/react";
import { DropdownQuienes } from "../Dropdown/DropdownQuienes";
import { DropdownArboles } from "../Dropdown/DropdownArboles";
import { DropdownArbolesNacimiento } from "../Dropdown/DropdownArbolesNacimiento";


export const MenuBar = () => {
  return (
    <Navbar isBordered>
      <NavbarContent justify="center">
        <NavbarBrand className="mr-4">
          <p className="hidden sm:block font-bold text-inherit">Bosques De Colombia</p>
        </NavbarBrand> 
        <NavbarContent className="hidden sm:flex gap-3">
          <NavbarItem>
            <Link color="foreground" href="https://www.bosquesdecolombia.com/">
              Inicio
            </Link>
          </NavbarItem>
          <NavbarItem>
            <DropdownQuienes/>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="https://www.bosquesdecolombia.com/bancos-de-proteina">
              Bancos de Proteina
            </Link>
          </NavbarItem>
          <NavbarItem>
           <DropdownArboles />
          </NavbarItem>
          <NavbarItem>
            <DropdownArbolesNacimiento />
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="https://www.bosquesdecolombia.com/contacto">
              Contacto
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

       <NavbarContent as="div" className="items-center" justify="end">
       </NavbarContent>
    </Navbar>
  );
}
