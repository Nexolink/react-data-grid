import React, { memo } from 'react';
import clsx from 'clsx';
function GroupCell({ id, rowIdx, groupKey, childRows, isExpanded, isCellSelected, isRowSelected, eventBus, column, groupColumnIndex }) {
    function toggleGroup() {
        eventBus.dispatch('TOGGLE_GROUP', id);
    }
    function onRowSelectionChange(checked) {
        eventBus.dispatch('SELECT_ROW', { rowIdx, checked, isShiftClick: false });
    }
    // Only make the cell clickable if the group level matches
    const isLevelMatching = column.rowGroup && groupColumnIndex === column.idx;
    return (React.createElement("div", { role: "gridcell", "aria-colindex": column.idx + 1, key: column.key, className: clsx('rdg-cell', {
            'rdg-cell-frozen': column.frozen,
            'rdg-cell-frozen-last': column.isLastFrozenColumn,
            'rdg-cell-selected': isCellSelected
        }), style: {
            width: column.width,
            left: column.left,
            cursor: isLevelMatching ? 'pointer' : 'default'
        }, onClick: isLevelMatching ? toggleGroup : undefined }, column.groupFormatter && (!column.rowGroup || groupColumnIndex === column.idx) && (React.createElement(column.groupFormatter, { groupKey: groupKey, childRows: childRows, column: column, isExpanded: isExpanded, isCellSelected: isCellSelected, isRowSelected: isRowSelected, onRowSelectionChange: onRowSelectionChange, toggleGroup: toggleGroup }))));
}
export default memo(GroupCell);
//# sourceMappingURL=GroupCell.js.map