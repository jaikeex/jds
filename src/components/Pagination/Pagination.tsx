import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { Typography } from 'components/Typography';
import type { ButtonAppearance } from 'components/Button';
import { usePaginationRange } from './usePaginationRange';
import type { Size, ThemeColorVariants } from 'core/types';
import * as Styled from './styles';

export interface PaginationProps {
  /**
   * Appearance of the pagination. Can be `filled`, `outlined` or `subtle`.
   */
  appearance?: ButtonAppearance;
  /**
   * The color of the pagination. Can be any of the theme colors.
   */
  color?: ThemeColorVariants;
  /**
   * Default selected page.
   */
  defaultPage?: number;
  /**
   * Callback fired whenever a new page is selected.
   * @param page number of the selected page
   * @returns void
   */
  onChange?: (page: number) => void;
  /**
   * Controls the currently selected page.
   */
  page?: number;
  /**
   * The size of the component.
   */
  size?: Size;
  /**
   * The number of pages available.
   */
  totalPages?: number;
  /**
   * Maximum amount of numbered buttons adjacent to the currently selected page.
   */
  siblingCount?: number;
}

const Pagination: React.FC<PaginationProps> = ({
  appearance = 'filled',
  color = 'primary',
  defaultPage = 1,
  onChange = () => {},
  page = defaultPage,
  size = 'medium',
  totalPages = 1,
  siblingCount = 1
}): JSX.Element => {
  const [activePage, setActivePage] = useState<number>(page);
  const paginationRange = usePaginationRange(activePage, totalPages, siblingCount);

  const pageClickHandler = useCallback(
    (value: number | string) => {
      let newPage: number;
      if (typeof value === 'number') {
        newPage = value;
      } else if (value === '... ') {
        const lastLeftSibling = paginationRange.at(paginationRange.indexOf('... ') + 1);
        newPage = Number(lastLeftSibling) - 1;
      } else if (value === ' ...') {
        const lastRightSibling = paginationRange.at(paginationRange.indexOf(' ...') - 1);
        newPage = Number(lastRightSibling) + 1;
      } else {
        return;
      }

      setActivePage(newPage);
      onChange(newPage);
    },
    [paginationRange, setActivePage, onChange]
  );

  const paginationItemProps = { color, appearance, size };

  useEffect(() => {
    setActivePage(page);
  }, [page]);

  return (
    <Styled.Pagination>
      <Styled.PaginationItem
        selected={false}
        onClick={useCallback(() => pageClickHandler(1), [pageClickHandler])}
        {...paginationItemProps}
      >
        <Typography variant="button">&laquo;</Typography>
      </Styled.PaginationItem>

      <Styled.PaginationItem
        selected={false}
        onClick={useCallback(() => pageClickHandler(Math.max(activePage - 1, 1)), [pageClickHandler, activePage])}
        {...paginationItemProps}
      >
        <Typography variant="button">&lsaquo;</Typography>
      </Styled.PaginationItem>

      {paginationRange.map((val, index) => (
        <Styled.PaginationItem
          selected={activePage === val}
          onClick={useCallback(() => pageClickHandler(val), [pageClickHandler, val])}
          key={index}
          {...paginationItemProps}
        >
          <Typography variant="button">{val}</Typography>
        </Styled.PaginationItem>
      ))}

      <Styled.PaginationItem
        selected={false}
        onClick={useCallback(
          () => pageClickHandler(Math.min(activePage + 1, totalPages)),
          [pageClickHandler, activePage]
        )}
        {...paginationItemProps}
      >
        <Typography variant="button">&rsaquo;</Typography>
      </Styled.PaginationItem>

      <Styled.PaginationItem
        selected={false}
        onClick={useCallback(() => pageClickHandler(totalPages), [pageClickHandler, totalPages])}
        {...paginationItemProps}
      >
        <Typography variant="button">&raquo;</Typography>
      </Styled.PaginationItem>
    </Styled.Pagination>
  );
};

Pagination.displayName = 'Pagination';
export default Pagination;
