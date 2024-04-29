import { DropdownAttributes } from './dropdownAttributes.interface';
import { DropdownItemAttributes } from './dropdownItemAttributes.interface';
import { DropdownMenuAttributes } from './dropdownMenuAttributes.interface';
import { DropdownSectionAttributes } from './dropdownSectionAttributes.interface';
import { ReactNode } from 'react';

export interface Item {
    id: string | number | undefined;
    label: string;

    href?: string;
    disabled?: boolean;
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | undefined;
    title?: string | ReactNode;
    textValue?: string;
    description?: string;
    shortcut?: string;
    startContent?: ReactNode | string;
    endContent?: ReactNode;
    showDivider?: boolean;
    rel?: string;
    download?: boolean | string;
    ping?: string;
    isReadOnly?: boolean;
    hideSelectedIcon?: boolean;
    closeOnSelect?: boolean;
    // classNames?: string;
}

export interface Section {
    titleSection?: string;
    items?: Item[];
}

export interface Avatar {
    name?: string;
    avatar?: string;
    description?: string;
}

export interface DropdownProps {
    title: string;
    sections: Section[];
    user?: Avatar;
    dropdown?: DropdownAttributes;
    dropdownItem?: DropdownItemAttributes;
    dropdownMenu?: DropdownMenuAttributes;
    dropdownSection?: DropdownSectionAttributes;
}