import { ComponentPropsWithoutRef, forwardRef } from 'react'

const Table = forwardRef<HTMLTableElement, ComponentPropsWithoutRef<'table'>>((props, ref) => {
  return <table {...props} ref={ref}></table>
})

const TableBody = forwardRef<HTMLTableSectionElement, ComponentPropsWithoutRef<'tbody'>>(
  (props, ref) => {
    return <tbody {...props} ref={ref} />
  }
)

const TableHeader = forwardRef<HTMLTableSectionElement, ComponentPropsWithoutRef<'thead'>>(
  (props, ref) => {
    return <thead {...props} ref={ref}></thead>
  }
)

const TableRow = forwardRef<HTMLTableRowElement, ComponentPropsWithoutRef<'tr'>>((props, ref) => {
  return <tr {...props} ref={ref} />
})

const TableCellHead = forwardRef<HTMLTableCellElement, ComponentPropsWithoutRef<'th'>>(
  (props, ref) => {
    return <th {...props} ref={ref} />
  }
)

const TableCell = forwardRef<HTMLTableCellElement, ComponentPropsWithoutRef<'td'>>((props, ref) => {
  return <td {...props} ref={ref} />
})

export { Table, TableBody, TableCell, TableCellHead, TableHeader, TableRow }
