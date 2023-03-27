import React from 'react';
import range from 'lodash/range';

export const usePaginationRange = (activePage: number, totalPages: number, siblingCount: number) => {
  const leftSiblingIndex = Math.max(activePage - siblingCount, 1);
  const rightSiblingIndex = Math.min(activePage + siblingCount, totalPages);

  const paginationRange = React.useMemo((): (number | string)[] => {
    const numberOfDisaplayedPages = 7 + siblingCount;

    if (numberOfDisaplayedPages >= totalPages) {
      return range(1, totalPages + 1);
    }

    const leftEllipsisVisible = leftSiblingIndex > 2;
    const rightEllipsisVisible = rightSiblingIndex < totalPages - 2;

    if (!leftEllipsisVisible && rightEllipsisVisible) {
      const leftItemsCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemsCount + 1);
      return [...leftRange, ' ...', totalPages];
    } else if (!rightEllipsisVisible && leftEllipsisVisible) {
      const rightItemsCount = 3 + 2 * siblingCount;
      const rightRange = range(totalPages - rightItemsCount + 1, totalPages + 1);
      return [1, '... ', ...rightRange];
    } else {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex + 1);
      return [1, '... ', ...middleRange, ' ...', totalPages];
    }
  }, [activePage, totalPages, siblingCount]);

  return paginationRange;
};
