import { Search } from '@/components/Search/Search'
import { NavigationTabs } from '@/components/NavigationTabs/NavigationTabs'
import { TableSimple } from '@/components/TableSimple/TableSimple'

export default function Home() {

  let tabs = [
    {
      id: 'photos',
      label: 'Photos',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 'music',
      label: 'Music',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      id: 'videos',
      label: 'Videos',
      content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];

  const rows = [
    {
      key: "1",
      name: "Tony Reichert",
      role: "CEO",
      status: "Active",
    },
    {
      key: "2",
      name: "Zoey Lang",
      role: "Technical Lead",
      status: "Paused",
    },
    {
      key: "3",
      name: "Jane Fisher",
      role: "Senior Developer",
      status: "Active",
    },
    {
      key: "4",
      name: "William Howard",
      role: "Community Manager",
      status: "Vacation",
    },
  ];
  
  const columns = [
    {
      key: "name",
      label: "NAME",
    },
    {
      key: "role",
      label: "ROLE",
    },
    {
      key: "status",
      label: "STATUS",
    },
  ]; 
  return (
    <main className="grid gap-10 p-4">
      <Search placeholder='Types of potatoes' label='Search'/>
      <NavigationTabs tabs={ tabs } />
      <TableSimple rows={ rows } columns={ columns }/>
    </main>
  )
}
