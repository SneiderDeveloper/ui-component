'use client'
import React from 'react';
import ButtonGroupUI from '@/components/ButtonGroup/ButtonGroup';

const Page = () => {
  const listButtons = [
    {
      items: [
        {
          id: 1,
          label: 'Create a merge commit',
          description: 'All commits from the source branch are added to the destination branch via a merge commit.',
        },
        {
          id: 2,
          label: 'Squash and merge',
          description: 'All commits from the source branch are added to the destination branch as a single commit.',
        },
        {
          id: 3,
          label: 'Rebase and merge',
          description: 'All commits from the source branch are added to the destination branch individually.',
        },
      ],
    },
  ];

  return (
    <div>
      <ButtonGroupUI listButtons={listButtons} isDropdown={true}>
        DroppDown😎
      </ButtonGroupUI>
    </div>
  );
};
      
export default Page;

