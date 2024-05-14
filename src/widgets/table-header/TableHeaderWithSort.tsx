import { useSearchParams } from 'react-router-dom'

import { Table } from '@/shared/ui/Table'
import { Caret } from '@/shared/ui/icons/Caret'
import { clsx } from 'clsx'

import s from '@/widgets/deck-list/DeckList.module.scss'

type Props = {
  headers: HeaderKeys[]
}

type HeaderKeys = {
  keyToSort: string
  label: string
}

export const TableHeaderWithSort = ({ headers }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [currentKeyToSort, direction] = searchParams.get('orderBy')?.split('-') || []

  const headerClickHandler = (th: { keyToSort: string; label: string }) => {
    searchParams.set(
      'orderBy',
      `${th.keyToSort}-${
        th.keyToSort === currentKeyToSort ? (direction === 'asc' ? 'desc' : 'asc') : 'desc'
      }`
    )
    setSearchParams(searchParams)
  }

  return (
    <Table.TableHeader className={s.cellHead}>
      <Table.TableRow>
        {headers.map(th => (
          <Table.TableCellHead key={th.label} onClick={() => headerClickHandler(th)}>
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
