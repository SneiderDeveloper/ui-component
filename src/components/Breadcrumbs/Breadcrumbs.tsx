'use client'

import { 
    Breadcrumbs as BreadcrumbsContainer, 
    BreadcrumbItem 
} from '@nextui-org/breadcrumbs';
import { useState } from 'react';

export const Breadcrumbs = ({
    breadcrumbs,
    size,
    color,
    variant,
    radius,
    separator,
    spaceBetween='px-1',
    maxItems,
    itemsBeforeCollapse,
    itemsAfterCollapse,
    isDisabled
}: {
    breadcrumbs: { id: string | number, href: string, label: string }[];
    size?: 'sm' | 'md' | 'lg' | undefined;
    color?: 'foreground' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | undefined;
    variant?: 'solid' | 'bordered' | 'light' | undefined;
    radius?: 'none' | 'full' | 'lg' | 'md' | 'sm' | undefined;
    separator?: string;
    isDisabled?: boolean;
    spaceBetween?: string;
    maxItems?: number;
    itemsBeforeCollapse?: number;
    itemsAfterCollapse?: number;
}) => {
    const [currentPage, setCurrentPage] = useState<string>();

    return (
        <BreadcrumbsContainer 
            size={ size } 
            color={ color } 
            variant={ variant } 
            radius={ radius } 
            separator={ separator }
            isDisabled={ isDisabled }
            itemClasses={{
                separator: spaceBetween
            }}
            maxItems={ maxItems } 
            itemsBeforeCollapse={ itemsBeforeCollapse } 
            itemsAfterCollapse={ itemsAfterCollapse }
            onAction={(key) => setCurrentPage(String(key))}
            // renderEllipsis={({items, ellipsisIcon, separator}) => (
            //     <div className='flex items-center'>
            //         <Dropdown>
            //             <DropdownTrigger>
            //             <Button
            //                 isIconOnly
            //                 className='min-w-unit-6 w-unit-6 h-unit-6'
            //                 size='sm'
            //                 variant='flat'
            //             >
            //                 {ellipsisIcon}
            //             </Button>
            //             </DropdownTrigger>
            //             <DropdownMenu aria-label='Routes'>
            //             {items.map((item, index) => (
            //                 <DropdownItem key={index} href={item.href}>
            //                 {item.children}
            //                 </DropdownItem>
            //             ))}
            //             </DropdownMenu>
            //         </Dropdown>
            //         {separator}
            //     </div>
            // )}
        >
            {breadcrumbs.map(crumb=> (
                <BreadcrumbItem 
                    key={ crumb.id } 
                    href={ crumb.href }
                    isCurrent={ String(currentPage) === String(crumb.id) }
                >{ crumb.label }
                </BreadcrumbItem>
            ))}
        </BreadcrumbsContainer>
    )
}
