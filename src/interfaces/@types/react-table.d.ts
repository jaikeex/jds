import 'react-table';

declare module 'react-table' {
  export interface ColumnInterface<D extends object>
    extends UseTableColumnOptions<D>,
      UseSortByColumnOptions<D>,
      UseFiltersColumnOptions<D> {}

  export interface UseTableColumnOptions<D extends object> {
    id?: IdType<D> | undefined;
    Header?: Renderer<HeaderProps<D>> | undefined;
    Footer?: Renderer<FooterProps<D>> | undefined;
    width?: number | string | undefined;
    minWidth?: number | undefined;
    maxWidth?: number | undefined;
    textAlign?: 'center' | 'start' | 'end';
    sortable?: boolean;
    filter?: 'text' | 'between' | 'exact';
  }

  export interface TableOptions<D extends object> extends UseTableOptions<D>, UseSortByOptions<D> {}

  export interface UseTableInstanceProps<D extends object>
    extends UsePaginationInstanceProps<D>,
      UseRowSelectInstanceProps<D> {
    state: TableState<D>;
    plugins: Array<PluginHook<D>>;
    dispatch: TableDispatch;
    columns: Array<ColumnInstance<D>>;
    allColumns: Array<ColumnInstance<D>>;
    visibleColumns: Array<ColumnInstance<D>>;
    headerGroups: Array<HeaderGroup<D>>;
    footerGroups: Array<HeaderGroup<D>>;
    headers: Array<ColumnInstance<D>>;
    flatHeaders: Array<ColumnInstance<D>>;
    rows: Array<Row<D>>;
    rowsById: Record<string, Row<D>>;
    getTableProps: (propGetter?: TablePropGetter<D>) => TableProps;
    getTableBodyProps: (propGetter?: TableBodyPropGetter<D>) => TableBodyProps;
    prepareRow: (row: Row<D>) => void;
    flatRows: Array<Row<D>>;
    totalColumnsWidth: number;
    allColumnsHidden: boolean;
    toggleHideColumn: (columnId: IdType<D>, value?: boolean) => void;
    setHiddenColumns: (param: Array<IdType<D>> | UpdateHiddenColumns<D>) => void;
    toggleHideAllColumns: (value?: boolean) => void;
    getToggleHideAllColumnsProps: (props?: Partial<TableToggleHideAllColumnProps>) => TableToggleHideAllColumnProps;
    getHooks: () => Hooks<D>;
  }

  export interface ColumnInstance<D extends object>
    extends Omit<ColumnInterface<D>, 'id'>,
      ColumnInterfaceBasedOnValue<D>,
      UseTableColumnProps<D>,
      UseSortByColumnProps<D>,
      UseFiltersColumnProps<D>,
      UseFiltersColumnProps<D> {}

  export interface HeaderGroup<D extends object>
    extends ColumnInstance<D>,
      UseTableHeaderGroupProps<D>,
      UseSortByColumnProps<D>,
      UseFiltersColumnProps<D>,
      UseFiltersColumnProps<D> {}

  export interface Row<D extends object> extends UseTableRowProps<D>, UseRowSelectRowProps<D> {}
}
