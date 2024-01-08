import { SIZES } from "../../../constants/sizes";
import React from "react";
import { ElementContent, VibeComponent, VibeComponentProps } from "../../../types";
import { CloseMenuOption } from "./MenuConstants";
export interface MenuProps extends VibeComponentProps {
    /**
     * @deprecated - use className instead
     */
    classname?: string;
    size?: (typeof SIZES)[keyof typeof SIZES];
    tabIndex?: number;
    ariaLabel?: string;
    ariaDescribedBy?: string;
    focusOnMount?: boolean;
    isVisible?: boolean;
    onClose?: (option: CloseMenuOption) => void;
    focusItemIndex?: number;
    isSubMenu?: boolean;
    useDocumentEventListeners?: boolean;
    focusItemIndexOnMount?: number;
    shouldScrollMenu?: boolean;
    children?: ElementContent;
}
declare const _default: ((VibeComponent<MenuProps & React.RefAttributes<HTMLElement>, HTMLElement> & Partial<{
    sizes: {
        readonly SMALL: "small";
        readonly MEDIUM: "medium";
        readonly LARGE: "large";
        readonly XXS: "xxs";
        readonly XS: "xs";
    };
}>) | (React.FC<MenuProps & React.RefAttributes<HTMLElement>> & Partial<{
    sizes: {
        readonly SMALL: "small";
        readonly MEDIUM: "medium";
        readonly LARGE: "large";
        readonly XXS: "xxs";
        readonly XS: "xs";
    };
}>)) & {
    sizes: {
        readonly SMALL: "small";
        readonly MEDIUM: "medium";
        readonly LARGE: "large";
        readonly XXS: "xxs";
        readonly XS: "xs";
    };
};
export default _default;
