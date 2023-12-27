'use client'

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { DropdownQuienes } from "../Dropdown/DropdownQuienes";
import { DropdownArboles } from "../Dropdown/DropdownArboles";
import { DropdownArbolesNacimiento } from "../Dropdown/DropdownArbolesNacimiento";


export const MenuBar = () => {

  const commonStyle = {
    fontSize: '18px', 
    fontFamily: 'Arial, sans-serif',
    color: 'white'
  
  };

  const linkStyle = {...commonStyle,
    padding: '8px 12px',    
    borderRadius: '10px',     
  };

  return (
    <Navbar isBordered style={{ border: 'transparent', backgroundColor: 'transparent', borderRadius: '10px' }}>
      <NavbarContent justify="center">
        <NavbarBrand className="mr-4">
          {/* <p>Bosques De Colombia</p> */}
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
