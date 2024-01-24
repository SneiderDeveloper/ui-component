export interface DropdownAttributes {
    type: 'menu' | 'listbox';
    trigger: 'press' | 'longPress';
    endContent: boolean;
    isDisabled?: boolean;
    closeOnSelect?: boolean;
    shouldBlockScroll?: boolean;
}