import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs'
import { Search } from '@/components/Search/Search'
import { NavigationTabs } from '@/components/NavigationTabs/NavigationTabs'
import { TableSimple } from '@/components/TableSimple/TableSimple'
import { Carousel } from '@/components/Carousel/Carousel';

import { EmblaOptionsType } from 'embla-carousel-react'

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

  const OPTIONS: EmblaOptionsType = {}
  const SLIDE_COUNT = 4
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <main className="grid gap-10 p-4">
      <Search placeholder='Types of potatoes' label='Search'/>
      <NavigationTabs tabs={ tabs } />
      <TableSimple rows={ rows } columns={ columns }/>
      <Breadcrumbs breadcrumbs={ items } />
      <section className="sandbox__carousel">
        <Carousel slides={ SLIDES } options={OPTIONS}/>
      </section>
    </main>
  )
}
