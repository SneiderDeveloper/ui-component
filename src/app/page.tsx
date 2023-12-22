import { Search } from '@/components/Search/Search'
import { TableSimple } from '@/components/Table/Table'

export default function Home() {
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Search placeholder='Types of potatoes' label='Search'/>
      <TableSimple rows={ rows } columns={ columns }/>
    </main>
  )
}
