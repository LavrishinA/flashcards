import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { Typography } from '@/shared/ui/Typography'
import clsx from 'clsx'

import s from './Table.module.scss'

const Root = forwardRef<HTMLTableElement, ComponentPropsWithoutRef<'table'>>((props, ref) => {
  const { className, ...rest } = props

  return <table className={clsx(className, s.root)} {...rest} ref={ref}></table>
})

const TableBody = forwardRef<HTMLTableSectionElement, ComponentPropsWithoutRef<'tbody'>>(
  (props, ref) => {
    const { className, ...rest } = props

    return <tbody className={clsx(className)} {...rest} ref={ref} />
  }
)

const TableHeader = forwardRef<HTMLTableSectionElement, ComponentPropsWithoutRef<'thead'>>(
  (props, ref) => {
    const { className, ...rest } = props

    return <thead className={clsx(className)} {...rest} ref={ref}></thead>
  }
)

const TableRow = forwardRef<HTMLTableRowElement, ComponentPropsWithoutRef<'tr'>>((props, ref) => {
  const { className, ...rest } = props

  return <tr className={clsx(className, s.row)} {...rest} ref={ref} />
})

const TableCellHead = forwardRef<HTMLTableCellElement, ComponentPropsWithoutRef<'th'>>(
  (props, ref) => {
    const { children, className, ...rest } = props

    return (
      <th className={clsx(className, s.cellHead)} {...rest} ref={ref}>
        <Typography as={'span'} variant={'subtitle2'}>
          {children}
        </Typography>
      </th>
    )
  }
)

const TableCell = forwardRef<HTMLTableCellElement, ComponentPropsWithoutRef<'td'>>((props, ref) => {
  const { children, className, ...rest } = props

  return (
    <td className={clsx(s.cellRow)} {...rest} ref={ref}>
      <Typography as={'span'} className={className} variant={'body2'}>
        {children}
      </Typography>
    </td>
  )
})

export const Table = { Root, TableBody, TableCell, TableCellHead, TableHeader, TableRow }
