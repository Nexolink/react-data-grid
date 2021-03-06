import { CellNavigationMode } from '../enums';
import { CalculatedColumn, Position, GroupRow } from '../types';
interface IsSelectedCellEditableOpts<R, SR> {
    selectedPosition: Position;
    columns: readonly CalculatedColumn<R, SR>[];
    rows: readonly (R | GroupRow<R>)[];
    onCheckCellIsEditable?: (arg: {
        row: R;
        column: CalculatedColumn<R, SR>;
    } & Position) => boolean;
    isGroupRow: (row: R | GroupRow<R>) => row is GroupRow<R>;
}
export declare function isSelectedCellEditable<R, SR>({ selectedPosition, columns, rows, onCheckCellIsEditable, isGroupRow }: IsSelectedCellEditableOpts<R, SR>): boolean;
interface GetNextSelectedCellPositionOpts<R, SR> {
    cellNavigationMode: CellNavigationMode;
    columns: readonly CalculatedColumn<R, SR>[];
    rowsCount: number;
    nextPosition: Position;
}
export declare function getNextSelectedCellPosition<R, SR>({ cellNavigationMode, columns, rowsCount, nextPosition }: GetNextSelectedCellPositionOpts<R, SR>): Position;
interface CanExitGridOpts<R, SR> {
    cellNavigationMode: CellNavigationMode;
    columns: readonly CalculatedColumn<R, SR>[];
    rowsCount: number;
    selectedPosition: Position;
    shiftKey: boolean;
}
export declare function canExitGrid<R, SR>({ cellNavigationMode, columns, rowsCount, selectedPosition: { rowIdx, idx }, shiftKey }: CanExitGridOpts<R, SR>): boolean;
export {};
