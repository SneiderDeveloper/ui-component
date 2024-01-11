import { Search } from '@/components/Search/Search'
import { MenuBar } from '@/components/MenuBar/MenuBar'
import { Dropdown } from '@nextui-org/dropdown'


export default function Home() {
  return (
    
    <main className="flex flex-col min-h-screen items-center p-24">
        <div style={{ height: 253 }}></div>
      <Search placeholder='Types of potatoes' label='Search'/>
      
    </main>
  )
}
