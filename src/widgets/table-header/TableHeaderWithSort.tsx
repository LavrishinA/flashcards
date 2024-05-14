import { ComponentPropsWithoutRef, FC } from 'react'
import { useSearchParams } from 'react-router-dom'

import { Table } from '@/shared/ui/Table'
import { Caret } from '@/shared/ui/icons/Caret'
import { clsx } from 'clsx'

import s from './TableHeaderWithSort.module.scss'

type Props = {
  headers: HeaderKeys[]
}

type HeaderKeys = {
  keyToSort: string
  label: string
}

export const TableHeaderWithSort: FC<
  Omit<
    ComponentPropsWithoutRef<'thead'> & {
      headers: HeaderKeys[]
    },
    'children'
  >
> = ({ headers, ...restProps }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [currentKeyToSort, direction] = searchParams.get('orderBy')?.split('-') || []

  const headerClickHandler = (th: { keyToSort: string; label: string }) => {
    searchParams.set('orderBy', `${th.keyToSort}-${direction === 'asc' ? 'desc' : 'asc'}`)
    setSearchParams(searchParams)
  }

  return (
    <Table.TableHeader {...restProps}>
      <Table.TableRow>
        {headers.map(th => (
          <Table.TableCellHead
            className={th.keyToSort ? s.cellHead : s.noneArrow}
            key={th.label}
            onClick={() => headerClickHandler(th)}
          >
            <div className={s.colName}>
              {th.label}
              {currentKeyToSort === th.keyToSort && (
                <Caret className={clsx(currentKeyToSort === th.keyToSort ? s[direction] : 'asc')} />
              )}
            </div>
          </Table.TableCellHead>
        ))}
        <Table.TableCellHead>{''}</Table.TableCellHead>
      </Table.TableRow>
    </Table.TableHeader>
  )
}
