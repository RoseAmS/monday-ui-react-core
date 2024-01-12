import React from "react";
import { MultiStepType, Size, StepStatus, TextPlacement } from "./MultiStepConstants";
import { SubIcon, VibeComponent, VibeComponentProps } from "../../types";
import { IconType } from "../Icon/IconConstants";
export type Step = {
    titleText: string;
    subtitleText: string;
    status: StepStatus;
};
interface MultiStepIndicatorProps extends VibeComponentProps {
    steps?: Step[];
    type?: MultiStepType;
    stepComponentClassName?: string;
    dividerComponentClassName?: string;
    fulfilledStepIcon?: SubIcon;
    fulfilledStepIconType?: IconType.SVG | IconType.ICON_FONT;
    isFulfilledStepDisplayNumber?: boolean;
    onClick?: (stepNumber: number) => void;
    textPlacement?: TextPlacement;
    size?: Size;
}
declare const _default: ((VibeComponent<MultiStepIndicatorProps & React.RefAttributes<HTMLOListElement>, HTMLOListElement> & Partial<{
    types: typeof MultiStepType;
    stepStatuses: typeof StepStatus;
    textPlacements: typeof TextPlacement;
    sizes: typeof Size;
}>) | (React.FC<MultiStepIndicatorProps & React.RefAttributes<HTMLOListElement>> & Partial<{
    types: typeof MultiStepType;
    stepStatuses: typeof StepStatus;
    textPlacements: typeof TextPlacement;
    sizes: typeof Size;
}>)) & {
    types: typeof MultiStepType;
    stepStatuses: typeof StepStatus;
    textPlacements: typeof TextPlacement;
    sizes: typeof Size;
};
export default _default;