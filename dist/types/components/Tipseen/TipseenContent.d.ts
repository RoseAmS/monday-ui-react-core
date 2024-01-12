import React, { FC } from "react";
import { ButtonPropsBackwardCompatible } from "./TipseenConstants";
import { VibeComponentProps } from "../../types";
import { ElementContent } from "../../types/ElementContent";
interface TipseenContentProps extends VibeComponentProps {
    title?: string;
    /**
     * Classname for overriding TipseenTitle styles
     */
    titleClassName?: string;
    /**
     * @deprecated - use hideDismiss instead
     */
    isDismissHidden?: boolean;
    hideDismiss?: boolean;
    children?: ElementContent;
    /**
     * @deprecated - use hideSubmit instead
     */
    isSubmitHidden?: boolean;
    hideSubmit?: boolean;
    submitButtonText?: string;
    submitButtonProps?: ButtonPropsBackwardCompatible;
    onSubmit?: (event: React.MouseEvent) => void;
    dismissButtonText?: string;
    dismissButtonProps?: ButtonPropsBackwardCompatible;
    onDismiss?: (event: React.MouseEvent) => void;
}
declare const TipseenContent: FC<TipseenContentProps>;
export default TipseenContent;