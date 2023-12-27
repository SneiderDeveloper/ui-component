import { Search } from '@/components/Search/Search'
import { Dropdown } from '@/components/Dropdown/Dropdown'
import { MenuBar } from '@/components/MenuBar/MenuBar'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Search placeholder='Types of potatoes' label='Search'/>
      <MenuBar />
      
    </main>
  )
}
