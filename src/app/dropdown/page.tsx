import { Dropdown } from "@/components/Dropdown/Dropdown"

export default function DropdownPage() {

    const itemsOne = [
        {
          titleSection: null,
          items: [
            { 
              id: 1,
              href: '/', 
              label: 'Home',
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
              label: 'Playlist',
              showDivider: true
            },
          ]
        },
        {
          titleSection: null,
          items: [
                { 
                    id: 8,
                    href: '/search', 
                    label: 'Eliminar',
                    color: 'danger',
                    className: 'text-danger',
                },
            ]
        }
    ]

    const itemsTwo = [
        {
          titleSection: null,
          items: [
                { 
                    id: 1,
                    href: '/', 
                    label: 'Home',
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
                    label: 'Genre',
                    disabled: true, 
                },
                { 
                    id: 7,
                    href: '/playlist', 
                    label: 'Playlist',
                    showDivider: true
                },
                { 
                    id: 8,
                    href: '/search', 
                    label: 'Eliminar',
                    color: 'danger',
                    className: 'text-danger',
                },
            ]
        },
    ]

    const itemsthree = [
        {
          titleSection: 'Selection',
          items: [
            { 
                id: 1,
                href: '/', 
                label: 'Home',
                shortcut: '⌘H',
            },
            { 
                id: 2,
                href: '/music', 
                label: 'Music',
                shortcut: '⌘M', 
            },
            { 
                id: 3,
                href: '/artist', 
                label: 'Artist',
                shortcut: '⌘A', 
            },
            { 
                id: 4,
                href: '/album', 
                label: 'Album',
                shortcut: '⌘L', 
            },
            { 
              id: 5,
              href: '/song', 
              label: 'Song',
              shortcut: '⌘S', 
            },
            { 
              id: 6,
              href: '/genre', 
              label: 'Genre',
              shortcut: '⌘G',
            },
            { 
              id: 7,
              href: '/playlist', 
              label: 'Playlist',
              shortcut: '⌘P',
              showDivider: true
            },
          ]
        },
        {
          titleSection: 'Danger',
          items: [
                { 
                    id: 8,
                    href: '/search', 
                    label: 'Eliminar',
                    shortcut: '⌘D',
                    color: 'danger',
                    className: 'text-danger',
                    description: 'Delete this item',
                },
            ]
        }
    ]

    const itemsFour = [
        {
          titleSection: 'Selection',
          items: [
            { 
                id: 1,
                
                label: 'Home',
                shortcut: '⌘H',
                startContent: '🏠',
            },
            { 
                id: 2,
                
                label: 'Music',
                shortcut: '⌘M', 
                startContent: '🎵',
            },
            { 
                id: 3,
                
                label: 'Artist',
                shortcut: '⌘A', 
                startContent: '👩‍🎤',
            },
            { 
                id: 4,
                
                label: 'Album',
                shortcut: '⌘L',
                startContent: '💿', 
            },
            { 
                id: 5,
                
                label: 'Song',
                shortcut: '⌘S',
                startContent: '🎶', 
            },
            { 
                id: 6,
                
                label: 'Genre',
                shortcut: '⌘G',
                startContent: '🎹',
            },
            { 
                id: 7,
                
                label: 'Playlist',
                shortcut: '⌘P',
                showDivider: true,
                startContent: '🎼',
            },
          ]
        },
        {
          titleSection: 'Danger',
          items: [
                { 
                    id: 8,
                    href: '/search', 
                    label: 'Eliminar',
                    shortcut: '⌘D',
                    color: 'danger',
                    className: 'text-danger',
                    description: 'Delete this item',
                    startContent: '❌',
                },
            ]
        }
    ]
    const itemsSix = [
        {
          titleSection: 'Selection',
          items: [
            { 
                id: 1,
                label: 'Home',
                shortcut: '⌘H',
                
            },
            { 
                id: 2,
                label: 'Music',
                shortcut: '⌘M', 
                
            },
            { 
                id: 3,
                label: 'Artist',
                shortcut: '⌘A', 
                
            },
            { 
                id: 4,
                label: 'Album',
                shortcut: '⌘L',
                
            },
            { 
                id: 5,
                label: 'Song',
                shortcut: '⌘S',
                
            },
            { 
                id: 6,
                label: 'Genre',
                shortcut: '⌘G',
                
            },
            { 
                id: 7,
                label: 'Playlist',
                shortcut: '⌘P',
                showDivider: true,
            },
          ]
        },
        {
          titleSection: 'Danger',
          items: [
                { 
                    id: 8,
                    href: '/search', 
                    label: 'Eliminar',
                    shortcut: '⌘D',
                    color: 'danger',
                    className: 'text-danger',
                    description: 'Delete this item',
                    
                },
            ]
        }
    ]
    
    return (
        <div className='flex gap-2'>
            <Dropdown
                title='solid'
                sections={ itemsOne } 
                dropdownItem={{ color: 'primary' }}
                dropdownMenu={{ variant: 'solid' }}      
            />
            <Dropdown
                title='bordered'
                sections={ itemsTwo } 
                dropdownItem={{ color: 'secondary' }}
                dropdownMenu={{ variant: 'bordered' }}      
            />
            <Dropdown
                title='light'
                sections={ itemsthree } 
                dropdownItem={{ color: 'success' }}
                dropdownMenu={{ variant: 'light' }}      
            />
            <Dropdown
                title='flat'
                sections={ itemsFour } 
                dropdownItem={{ color: 'warning' }}
                dropdownMenu={{ variant: 'flat', selectionMode:'single', disallowEmptySelection: true }}      
            />
            <Dropdown
                title='faded'
                sections={ itemsFour } 
                dropdownItem={{ color: 'warning' }}
                dropdownMenu={{ variant: 'faded', selectionMode: 'multiple', disallowEmptySelection: true }}      
            />
            <Dropdown
                title='shadow'
                sections={ itemsSix } 
                dropdownItem={{ color: 'warning' }}
                dropdownMenu={{ variant: 'shadow' }}      
            />
        </div>
    )
}