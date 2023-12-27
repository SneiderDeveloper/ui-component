import { Search } from '@/components/Search/Search'
import { Dropdown } from '@/components/Dropdown/Dropdown'
import { MenuBar } from '@/components/MenuBar/MenuBar'
import { Header } from '@/components/Header/Header'


export default function Home() {
  return (
    
    <main className="flex flex-col min-h-screen items-center p-24">
      <Header />
      <Search placeholder='Types of potatoes' label='Search'/>
      <MenuBar />
      
      
    </main>
  )
}
