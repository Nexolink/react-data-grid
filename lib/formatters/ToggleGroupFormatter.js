import React from 'react';
import { useFocusRef } from '../hooks';
export function ToggleGroupFormatter({ groupKey, isExpanded, isCellSelected, toggleGroup }) {
    const cellRef = useFocusRef(isCellSelected);
    function handleKeyDown({ key }) {
        if (key === 'Enter') {
            toggleGroup();
        }
    }
    const d = isExpanded ? 'M1 1 L 7 7 L 13 1' : 'M1 7 L 7 1 L 13 7';
    return (React.createElement("span", { ref: cellRef, className: "rdg-group-cell-content", tabIndex: -1, onKeyDown: handleKeyDown },
        groupKey,
        React.createElement("svg", { viewBox: "0 0 14 8", width: "14", height: "8", className: "rdg-caret" },
            React.createElement("path", { d: d }))));
}
//# sourceMappingURL=ToggleGroupFormatter.js.map