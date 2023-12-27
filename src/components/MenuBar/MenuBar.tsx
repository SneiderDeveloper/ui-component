'use client'

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { DropdownQuienes } from "../Dropdown/DropdownQuienes";
import { DropdownArboles } from "../Dropdown/DropdownArboles";
import { DropdownArbolesNacimiento } from "../Dropdown/DropdownArbolesNacimiento";


export const MenuBar = () => {

  const commonStyle = {
    fontSize: '18px', 
    fontFamily: 'Arial, sans-serif', 
  };

  const linkStyle = {...commonStyle,
    border: '1px solid #ccc', 
    padding: '8px 12px',    
    borderRadius: '10px',     
  };

  return (
    <Navbar isBordered style={{ border: '1px solid #ccc', backgroundColor: '#f5f5f5', borderRadius: '10px' }}>
      <NavbarContent justify="center">
        <NavbarBrand className="mr-4">
          <p className="hidden sm:block font-bold text-inherit">Bosques De Colombia</p>
        </NavbarBrand> 
        <NavbarContent className="hidden sm:flex gap-3">
          <NavbarItem>
            <Button style={linkStyle} 
            onClick={() => window.location.href="#"}
            >
              Inicio
            </Button>
          </NavbarItem>
          <NavbarItem>
            <DropdownQuienes/>
          </NavbarItem>
          <NavbarItem>
            <Button style={linkStyle}
            onClick={() => window.location.href="#"}
            >
              Bancos de Proteina
            </Button>
          </NavbarItem>
          <NavbarItem>
           <DropdownArboles />
          </NavbarItem>
          <NavbarItem>
            <DropdownArbolesNacimiento />
          </NavbarItem>
          <NavbarItem>
            <Button style={linkStyle} 
            onClick={() => window.location.href="#"}
            >
              Contacto
            </Button>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

       <NavbarContent as="div" className="items-center" justify="end">
       </NavbarContent>
    </Navbar>
  );
}
