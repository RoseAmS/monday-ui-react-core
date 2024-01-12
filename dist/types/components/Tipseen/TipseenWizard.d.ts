import React, { FC } from "react";
import { StepsProps } from "../Steps/Steps";
interface TipseenWizardProps extends StepsProps {
    title?: string;
    /**
     * Classname for overriding TipseenTitle styles
     */
    titleClassName?: string;
    onFinish?: (e: React.MouseEvent | React.KeyboardEvent) => void;
}
declare const TipseenWizard: FC<TipseenWizardProps>;
export default TipseenWizard;