import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs'
import { Search } from '@/components/Search/Search'

export default function Home() {

  const items = [
    { 
      id: 1,
      href: '/', 
      label: 'Home' 
    },
    { 
      id: 2,
      href: '/music', 
      label: 'Music' 
    },
    { 
      id: 3,
      href: '/artist', 
      label: 'Artist' 
    },
    { 
      id: 4,
      href: '/album', 
      label: 'Album' 
    },
    { 
      id: 5,
      href: '/song', 
      label: 'Song' 
    },
    { 
      id: 6,
      href: '/genre', 
      label: 'Genre' 
    },
    { 
      id: 7,
      href: '/playlist', 
      label: 'Playlist'
    },
    { 
      id: 8,
      href: '/search', 
      label: 'Search'
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Search placeholder='Types of potatoes' label='Search'/>
      <Breadcrumbs breadcrumbs={ items } />
    </main>
  )
}
