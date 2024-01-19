import { Search } from '@/components/Search/Search'
import { MenuBar } from '@/components/MenuBar/MenuBar'
import { Dropdown1 } from '@/components/Dropdown/Dropdown1'
import { Dropdown } from '@/components/Dropdown/Dropdown'
import { Header } from '@/components/Header/Header'


export default function Home() {
  return (
    
    <main className="flex flex-col min-h-screen items-center p-24">
        <div style={{ height: 253 }}></div>
      
      
      {/* <Dropdown1 items={[]} /> */}
      <Dropdown mt-4
        buttonTitle={'DDM'} options={{ selectionMode: "multiple", unhover: true}}
        items={[{ key: 'Prueba1', label: 'Option1', href: '#' }, 
                { key: 'prueba2', label: 'Option2', href: '#' }, ]} 
                
        />
      
    </main>
  )
}
