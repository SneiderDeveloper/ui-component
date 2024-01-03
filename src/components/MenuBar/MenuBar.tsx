'use client'

import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { DropdownQuienes } from "../Dropdown/DropdownQuienes";
import { DropdownArboles } from "../Dropdown/DropdownArboles";
import { DropdownArbolesNacimiento } from "../Dropdown/DropdownArbolesNacimiento";
import {Dropdown} from "@/components/Dropdown/Dropdown";

const itemsNavbar = [
  {
    label: 'Inicio',
    url: '/'
  },
  {
    label: 'Árboles',
    url: '/arbol',
    children: [
      {
        key: "maderables",
        label: "Árboles Maderables",
        url: "https://www.bosquesdecolombia.com/es/arboles-maderables"
      },
      {
        key: "maderablesTemplado",
        label: "Árboles Maderables Templado",
        url: "https://www.bosquesdecolombia.com/es/arboles-maderables-templado"
      },
      {
        key: "ornamentales",
        label: "Árboles Ornamentales",
        url: "https://www.bosquesdecolombia.com/assets/media/slider2.jpg"
      },
      {
        key: "frutales",
        label: "Árboles Frutales",
        url: "https://www.bosquesdecolombia.com/es/arboles-frutales-templado"
      }
    ]
  }
]

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
            {
              itemsNavbar.map(item => (
                  <React.Fragment key={item.url}>
                    {
                      !item.children ? (
                          <Button style={linkStyle}
                                  onClick={() => window.location.href="#"}
                          >
                            {item.label}
                          </Button>
                      ) : (
                          <Dropdown buttonTitle={item.label} items={item.children} />
                      )
                    }

                  </React.Fragment>

              ))
            }

          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
      </NavbarContent>
    </Navbar>
  );
}
