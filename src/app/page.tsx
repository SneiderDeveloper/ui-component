import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs'
import { Search } from '@/components/Search/Search'

export default function Home() {

  const items = [
    { href: '/', label: 'Home' },
    { href: '/music', label: 'Music' },
    { href: '/artist', label: 'Artist' },
    { href: '/album', label: 'Album' },
    { href: '/song', label: 'Song' },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Search placeholder='Types of potatoes' label='Search'/>
      <Breadcrumbs breadcrumbs={ items }/>
    </main>
  )
}
