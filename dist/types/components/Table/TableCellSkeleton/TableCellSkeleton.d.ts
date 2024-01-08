import { FC } from "react";
import { VibeComponentProps } from "../../../types";
import { TableLoadingStateType } from "../Table/Table";
export interface TableCellSkeletonProps extends VibeComponentProps {
    type?: TableLoadingStateType;
    short?: boolean;
}
declare const TableCellSkeleton: FC<TableCellSkeletonProps>;
export default TableCellSkeleton;
