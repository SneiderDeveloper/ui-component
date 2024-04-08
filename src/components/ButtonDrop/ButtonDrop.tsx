import React from "react";
import { Button, ButtonGroup } from "@nextui-org/react";
import { ChevronDownIcon } from "./ChevronDownIcon";
import { Dropdown } from "@/components/Dropdown/Dropdown";

interface ButtonDropProps {
  isDropdown: boolean;
  listButtons: any[]; 
  children: React.ReactNode;
}

const ButtonDrop: React.FC<ButtonDropProps> = ({
  children,
  isDropdown,
  listButtons,
}) => {
  return (
    <>
      {isDropdown ? (
        <>
        <Button>{children}</Button>
        <Dropdown
          dropdown={{ placement: "bottom-end" }}
          dropdownMenu={{
            disallowEmptySelection: true,
            className: "max-w-[300px]",
            selectionMode: "single",
          }}
          title={<Button><ChevronDownIcon/></Button>}
          sections={listButtons}
        />
        </>
      ) : (
        <>
        {listButtons.map((atr) => (
          <ButtonGroup>
            {atr.items.map((button) => (
              <Button>{button.label}</Button>
            ))}
          </ButtonGroup>
        ))}
        </>
      )}
    </>
  );
};

export default ButtonDrop;