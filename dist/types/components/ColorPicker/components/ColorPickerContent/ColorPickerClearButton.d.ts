import { VibeComponentProps, VibeComponent, SubIcon } from "../../../../types";
interface ColorPickerClearButtonProps extends VibeComponentProps {
    onClick: () => void;
    text?: string;
    Icon: SubIcon;
}
export declare const ColorPickerClearButton: VibeComponent<ColorPickerClearButtonProps>;
export {};
