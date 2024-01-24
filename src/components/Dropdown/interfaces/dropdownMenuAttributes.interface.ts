import { ReactNode } from "react";

export interface DropdownMenuAttributes {
    variant?: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | undefined;
    selectionMode?: 'single' | 'multiple' | undefined;
    closeOnSelect?: boolean;
    items?: []; 
    color?: 'solid' | 'primary' | 'seconday' | 'sucess' | 'warning' | 'danger' | undefined;
    selectedKeys?:[];
    disabledKeys?: [] | 'all';
    disallowEmptySelection?: boolean;
    autoFocus?: boolean | 'firts' | 'last';
    topContent?: ReactNode;
    bottomContent?: ReactNode;
    emptyContent?: ReactNode;
    hideEmptyContent?: boolean;
    hideSelectedIcon?: boolean;
    shouldFocusWrap?: boolean;
    disableAnimation?: boolean;
    defaultSelectedKeys?: 'all' | [];
}