import { Search } from '@/components/Search/Search'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Search placeholder='Types of potatoes' label='Search'/>
    </main>
  )
}
