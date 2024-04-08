// ButtonGroupPage.tsx
import React from "react";
import {ButtonGroup}from "@/components/ButtonGroup/ButtonGroup"

const ButtonGroupPage = () => {
  const buttonlist = [
    {
      children: "one",
      attributes: {},
    },
    {
      children: "two",
      attributes: {},
    },
    {
      children: "three",
      attributes: {
        color: "danger",
        variant: "bordered",
      },
    },
  ];
  return (
    <div className="flex flex-row">
      <ButtonGroup buttonList={buttonlist}/>
    </div>
  );
};

export default ButtonGroupPage;

