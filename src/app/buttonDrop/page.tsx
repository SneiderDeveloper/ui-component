'use client'
// page.tsx
import React from "react";
import ButtonDrop from "@/components/ButtonDrop/ButtonDrop";

const Page = () => {
  const listButtons = [
    {
      items: [
        {
          id: 1,
          label: 'Create a merge commit',
          description: "All commits from the source branch are added to the destination branch via a merge commit.",
        },
        {
          id: 2,
          label: 'Squash and merge',
          description: "All commits from the source branch are added to the destination branch as a single commit.",
        },
        {
          id: 3,
          label: 'Rebase and merge',
          description: "All commits from the source branch are added to the destination branch individually.",
        },
      ],
    },
  ];

  return (
    <div>
      <ButtonDrop listButtons={listButtons} isDropdown={false}>
        DroppDown😎
      </ButtonDrop>
    </div>
  );
};

export default Page;

