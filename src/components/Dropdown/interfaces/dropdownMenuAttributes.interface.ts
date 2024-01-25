import { ReactNode } from "react";

export interface DropdownMenuAttributes {
    variant?: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow';
    selectionMode?: 'single' | 'multiple' | undefined;
    closeOnSelect?: boolean;
    items?: []; 
    color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | undefined;
    selectedKeys?:[];
    // disabledKeys?: [] | 'all';
    disallowEmptySelection?: boolean;
    autoFocus?: boolean;
    topContent?: ReactNode;
    bottomContent?: ReactNode;
    emptyContent?: ReactNode;
    hideEmptyContent?: boolean;
    hideSelectedIcon?: boolean;
    shouldFocusWrap?: boolean;
    disableAnimation?: boolean;
    defaultSelectedKeys?: 'all' | [];
}