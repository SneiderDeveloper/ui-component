'use client'

import { 
    Breadcrumbs as BreadcrumbsContainer, 
    BreadcrumbItem 
} from "@nextui-org/breadcrumbs";

export const Breadcrumbs = ({
    breadcrumbs,
    size,
    color,
    variant,
    radius,
    separator,
    spaceBetween='px-1',
    isDisabled
}: {
    breadcrumbs: { href: string, label: string }[];
    size?: 'sm' | 'md' | 'lg' | undefined;
    color?: 'foreground' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | undefined;
    variant?: 'solid' | 'bordered' | 'light' | undefined;
    radius?: 'none' | 'full' | 'lg' | 'md' | 'sm' | undefined;
    separator?: string;
    isDisabled?: boolean;
    spaceBetween?: string;
}) => {
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
        >
            {breadcrumbs.map((crumb, index) => (
                <BreadcrumbItem 
                    key={ index } 
                    href={ crumb.href }
                >{ crumb.label }
                </BreadcrumbItem>
            ))}
        </BreadcrumbsContainer>
    )
}
