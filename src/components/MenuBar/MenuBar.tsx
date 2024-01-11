'use client'

import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import {Dropdown} from "@/components/Dropdown/Dropdown";

const itemsNavbar = [
  {
    label: 'Inicio',
    href: '/'
  },
  {
    label: 'Dropdown1',
    href: '/arbol',
    children: [
      {
        key: "label1",
        label: "item1",
        href: "#"
      },
      {
        key: "label2",
        label: "item2",
        href: "#"
      },
      {
        key: "label3",
        label: "item3",
        href: "#"
      },
      {
        key: "label4",
        label: "item4",
        href: "#"
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
                  <React.Fragment key={item.href}>
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
