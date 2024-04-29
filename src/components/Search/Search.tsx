'use client'

import { Input } from '@nextui-org/input';
import { SearchIcon } from './SearchIcon'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { useState } from 'react'
import { useDebouncedCallback } from 'use-debounce';

export const Search = ({
    label='Search',
    placeholder='Types of search',
    width='340px',
    radius='lg',
    bg='bg-default-200/50',
    darkBg='bg-default/60',
    hover='bg-default-200/70',
    darkHover='bg-default/70',
    style,
}: {
    label?: string
    placeholder?: string;
    width?: string;
    radius?: 'none' | 'sm' | 'md' | 'lg' | 'full' | undefined;
    bg?: string;
    style?: { label: string; input: string[]; innerWrapper: string; inputWrapper: string[];  };
    darkBg?: string;
    hover?: string;
    darkHover?: string;
}) => {
    const searchParams = useSearchParams()
    const pathName = usePathname()
    const { replace } = useRouter()
    const [searchValue, setSearchValue] = useState(searchParams.get('search') || '');
    const WAIT_BETWEEN_CHANGE = 200

    const handleSearchParams = useDebouncedCallback((value: string) => {
        const params = new URLSearchParams(searchParams)
        if (value) {
            params.set('search', value)
        } else {
            params.delete('search')
        }
        replace(`${pathName}?${params.toString()}`)
    }, WAIT_BETWEEN_CHANGE)
    
    const handleChange = (value: string) => {
        setSearchValue(value)
        handleSearchParams(value)
    }

    const handleClear = () => {
        const params = new URLSearchParams(searchParams)
        params.delete('search')
        replace(`${pathName}?${params.toString()}`)
        setSearchValue('')
    }

    const stylesDefault = {
        label: style?.label || 'text-black/50 dark:text-white/90',
        input: [
            'bg-white',
            'text-black/90 dark:text-white/90',
            'placeholder:text-default-700/50 dark:placeholder:text-white/60',
            ...style?.input || [],
        ],
        innerWrapper: style?.innerWrapper || 'bg-transparent',
        inputWrapper: [
            'shadow-xl',
            bg,
            `dark:${darkBg}`,
            'backdrop-blur-xl',
            'backdrop-saturate-200',
            `hover:${hover}`,
            `dark:hover:${darkHover}`,
            'group-data-[focused=true]:bg-default-200/50',
            'dark:group-data-[focused=true]:bg-default/60',
            '!cursor-text',
            ...style?.inputWrapper || [],
        ],
    }

    return (
        <search className={`w-[${width}]`}>
            <Input
                label={ label }
                isClearable
                value={ searchValue }
                onClear={ handleClear }
                radius={ radius }
                onChange={ e => handleChange(e.target.value) }
                defaultValue={ searchParams.get('search') || '' }
                classNames={ stylesDefault }
                placeholder={ placeholder }
                startContent={
                    <SearchIcon 
                        className='
                            text-black/50 
                            mb-0.5 
                            dark:text-white/90 
                            text-slate-400 
                            pointer-events-none 
                            flex-shrink-0
                        ' 
                    />
                }
            />
        </search>
    )
}