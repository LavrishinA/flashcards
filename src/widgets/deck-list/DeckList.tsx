import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { Link, useLocation, useSearchParams } from 'react-router-dom'

import { Deck } from '@/entities/decks/model/types'
import { DeleteDeck } from '@/features/decks/delete-deck'
import { UpdateDeck } from '@/features/decks/edit-deck'
import { dateFormater } from '@/shared/lib/dateFormater'
import { Button } from '@/shared/ui/Button'
import { Table } from '@/shared/ui/Table'
import { Typography } from '@/shared/ui/Typography'
import { DeleteIcon, EditIcon, PlayIcon } from '@/shared/ui/icons'
import { Caret } from '@/shared/ui/icons/Caret'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import { clsx } from 'clsx'

import 'react-loading-skeleton/dist/skeleton.css'

import s from './DeckList.module.scss'

type Props = {
  currentUser: string
  decks: Deck[]
  loading: boolean
}

const headers = [
  { keyToSort: 'name', label: 'Name' },
  { keyToSort: 'cardsCount', label: 'Cards' },
  { keyToSort: 'updated', label: 'Last Updated' },
  { keyToSort: 'author.name', label: 'Created by' },
]

export const DeckList = (props: Props) => {
  const { currentUser, decks, loading } = props
  const [searchParams, setSearchParams] = useSearchParams()
  const location = useLocation()
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

  const saveSearchParamsHandler = () => {
    localStorage.setItem('searchUrl', location.search)
  }

  return (
    <div className={s.deckListContainer}>
      <Table.Root className={s.table}>
        <Table.TableHeader className={s.cellHead}>
          <Table.TableRow>
            {headers.map(th => (
              <Table.TableCellHead key={th.label} onClick={() => headerClickHandler(th)}>
                <div className={s.colName}>
                  {th.label}
                  {currentKeyToSort === th.keyToSort && (
                    <Caret
                      className={clsx(currentKeyToSort === th.keyToSort ? s[direction] : 'asc')}
                    />
                  )}
                </div>
              </Table.TableCellHead>
            ))}
            <Table.TableCellHead>{''}</Table.TableCellHead>
          </Table.TableRow>
        </Table.TableHeader>
        <Table.TableBody>
          {decks &&
            decks.map((deck, index) =>
              loading ? (
                <TableRowSkeleton key={index} />
              ) : (
                <Table.TableRow key={deck.id}>
                  <Table.TableCell className={s.name}>
                    {deck.cover && (
                      <div className={s.ratioContainer}>
                        <AspectRatio ratio={21 / 9}>
                          <img alt={''} className={s.image} loading={'lazy'} src={deck?.cover} />
                        </AspectRatio>
                      </div>
                    )}
                    <Typography
                      as={Link}
                      className={s.text}
                      onClick={saveSearchParamsHandler}
                      to={`/${deck.id}/cards`}
                      variant={'body2'}
                    >
                      {deck.name}
                    </Typography>
                  </Table.TableCell>
                  <Table.TableCell>{deck.cardsCount}</Table.TableCell>
                  <Table.TableCell>{dateFormater(deck.updated)}</Table.TableCell>
                  <Table.TableCell>{deck.author.name}</Table.TableCell>
                  <Table.TableCell>
                    <div className={s.actions}>
                      {deck.cardsCount !== 0 && (
                        <Button as={Link} to={`/${deck.id}/learn`} variant={'text'}>
                          <PlayIcon height={16} width={16} />
                        </Button>
                      )}
                      {currentUser === deck.author.id && (
                        <>
                          <UpdateDeck deck={deck}>
                            <Button variant={'text'}>
                              <EditIcon height={16} width={16} />
                            </Button>
                          </UpdateDeck>
                          <DeleteDeck id={deck.id} name={deck.name}>
                            <Button variant={'text'}>
                              <DeleteIcon height={16} width={16} />
                            </Button>
                          </DeleteDeck>
                        </>
                      )}
                    </div>
                  </Table.TableCell>
                </Table.TableRow>
              )
            )}
        </Table.TableBody>
      </Table.Root>
    </div>
  )
}

const TableRowSkeleton = () => {
  return (
    <SkeletonTheme baseColor={'#333'} highlightColor={'#382766'}>
      <Table.TableRow>
        <Table.TableCell>
          <Skeleton width={220} />
        </Table.TableCell>
        <Table.TableCell>
          <Skeleton width={20} />
        </Table.TableCell>
        <Table.TableCell>
          <Skeleton width={50} />
        </Table.TableCell>
        <Table.TableCell>
          <Skeleton />
        </Table.TableCell>
        <Table.TableCell>
          <Skeleton circle className={s.actionSkeleton} />
        </Table.TableCell>
      </Table.TableRow>
    </SkeletonTheme>
  )
}
