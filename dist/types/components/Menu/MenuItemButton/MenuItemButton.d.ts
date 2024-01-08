import React from "react";
import { ButtonType } from "../../Button/ButtonConstants";
import { DialogPosition } from "../../../constants/positions";
import { SubIcon, VibeComponentProps, ElementContent } from "../../../types";
interface MenuItemButtonProps extends VibeComponentProps {
    /**
     * @deprecated - use className instead
     */
    classname?: string;
    kind?: ButtonType;
    leftIcon?: SubIcon;
    rightIcon?: SubIcon;
    index?: number;
    activeItemIndex?: number;
    disabled?: boolean;
    disableReason?: string;
    onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
    tooltipPosition?: DialogPosition;
    tooltipShowDelay?: number;
    resetOpenSubMenuIndex?: () => void;
    setSubMenuIsOpenByIndex?: (index: number, isOpen: boolean) => void;
    setActiveItemIndex?: (index: number) => void;
    menuRef?: React.RefObject<HTMLElement>;
    closeMenu?: () => void;
    useDocumentEventListeners?: boolean;
    children?: ElementContent | ElementContent[];
}
declare const _default: ((import("../../../types/VibeComponent").default<MenuItemButtonProps, unknown> & Partial<{
    kinds: typeof ButtonType;
    tooltipPositions: typeof DialogPosition;
}>) | (React.FC<MenuItemButtonProps> & Partial<{
    kinds: typeof ButtonType;
    tooltipPositions: typeof DialogPosition;
}>)) & {
    kinds: typeof ButtonType;
    tooltipPositions: typeof DialogPosition;
};
export default _default;
