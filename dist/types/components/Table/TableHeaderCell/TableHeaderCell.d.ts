import { SubIcon, VibeComponent, VibeComponentProps } from "../../../types";
export interface ITableHeaderCellProps extends VibeComponentProps {
    title: string;
    icon?: SubIcon;
    infoContent?: string;
    sortState?: "asc" | "desc" | "none";
    onSortClicked?: (direction: "asc" | "desc" | "none") => void;
    sortButtonAriaLabel?: string;
}
declare const TableHeaderCell: VibeComponent<ITableHeaderCellProps, HTMLDivElement>;
export default TableHeaderCell;