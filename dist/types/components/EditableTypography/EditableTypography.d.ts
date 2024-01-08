import React, { ComponentType } from "react";
import VibeComponentProps from "../../types/VibeComponentProps";
import VibeComponent from "../../types/VibeComponent";
import { HeadingProps } from "../Heading/Heading";
import { TextProps } from "../Text/Text";
export interface EditableTypographyImplementationProps {
    /** Value of the text */
    value: string;
    /** Will be called whenever the current value changes to a non-empty value */
    onChange?: (value: string) => void;
    /** Will be called whenever the component gets clicked */
    onClick?: (event: React.KeyboardEvent | React.MouseEvent) => void;
    /** Disables editing mode - component will be just a typography element */
    readOnly?: boolean;
    /** Shown in edit mode when the text value is empty */
    placeholder?: string;
    /** ARIA Label */
    ariaLabel?: string;
}
interface EditableTypographyProps extends VibeComponentProps, EditableTypographyImplementationProps {
    /** A typography component that is being rendered in view mode */
    component: ComponentType<HeadingProps | TextProps>;
    /** Controls the style of the typography component in view mode */
    typographyClassName: string;
}
declare const EditableTypography: VibeComponent<EditableTypographyProps, HTMLElement>;
export default EditableTypography;
