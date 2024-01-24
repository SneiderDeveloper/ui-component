import { DropdownAttributes } from './dropdownAttributes.interface';
import { DropdownItemAttributes } from './dropdownItemAttributes.interface';
import { DropdownMenuAttributes } from './dropdownMenuAttributes.interface';

export interface Item {
    key: string | number;
    label: string;
    href: string;
    shortcut?: string | undefined;
    startContent?: string | JSX.Element | undefined;
    disabled?: boolean | undefined;
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | undefined;
    className?: string | undefined;
}

export interface Avatar {
    name?: string;
    avatar?: string;
    description?: string;
}

export interface DropdownProps {
    title: string;
    items: Item[];
    user?: Avatar;
    dropdown: DropdownAttributes;
    dropdownItem: DropdownItemAttributes;
    dropdownMenu: DropdownMenuAttributes;
}