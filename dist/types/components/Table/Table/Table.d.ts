import React, { ReactElement } from "react";
import { SubIcon, VibeComponent, VibeComponentProps } from "../../../types";
import { ITableHeaderProps } from "../TableHeader/TableHeader";
import { ITableBodyProps } from "../TableBody/TableBody";
import { RowSizes } from "./TableConsts";
export type TableLoadingStateType = "long-text" | "medium-text" | "circle" | "rectangle";
type Width = number | `${number}%` | `${number}px` | `${number}fr`;
export interface ITableColumn {
    id: string;
    title: string;
    infoContent?: string;
    width?: Width | {
        min: Width;
        max: Width;
    };
    icon?: SubIcon;
    loadingStateType?: TableLoadingStateType;
}
interface ITableProps extends VibeComponentProps {
    columns: ITableColumn[];
    dataState?: {
        isLoading?: boolean;
        isError?: boolean;
    };
    errorState: ReactElement;
    emptyState: ReactElement;
    style?: React.CSSProperties;
    children?: ReactElement<ITableHeaderProps> | ReactElement<ITableBodyProps> | Array<ReactElement<ITableHeaderProps> | ReactElement<ITableBodyProps>>;
    size?: RowSizes;
    withoutBorder?: boolean;
}
interface ITableContext {
    columns: ITableProps["columns"];
    dataState?: ITableProps["dataState"];
    emptyState: ITableProps["emptyState"];
    errorState: ITableProps["errorState"];
}
export declare const TableContext: React.Context<ITableContext>;
declare const _default: ((VibeComponent<ITableProps & React.RefAttributes<HTMLDivElement>, HTMLDivElement> & Partial<{
    sizes: typeof RowSizes;
}>) | (React.FC<ITableProps & React.RefAttributes<HTMLDivElement>> & Partial<{
    sizes: typeof RowSizes;
}>)) & {
    sizes: typeof RowSizes;
};
export default _default;