import { Link } from 'react-router-dom'

import { DeckItem } from '@/entities/decks'
import { DeleteDeck } from '@/features/decks/delete-deck'
import { dateFormater } from '@/shared/lib/dateFormater'
import { Button } from '@/shared/ui/Button'
import { Table } from '@/shared/ui/Table'
import { Typography } from '@/shared/ui/Typography'
import { DeleteIcon, PlayIcon } from '@/shared/ui/icons'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'

import s from './DeckList.module.scss'

type Props = {
  currentUser: string
  decks: DeckItem[]
}

export const DeckList = (props: Props) => {
  const { currentUser, decks } = props

  return (
    <div className={s.deckListContainer}>
      <Table.Root>
        <Table.TableHeader className={s.cellHead}>
          <Table.TableRow>
            <Table.TableCellHead>Name</Table.TableCellHead>
            <Table.TableCellHead>Cards</Table.TableCellHead>
            <Table.TableCellHead>Last Updated</Table.TableCellHead>
            <Table.TableCellHead>Created by</Table.TableCellHead>
            <Table.TableCellHead>{''}</Table.TableCellHead>
          </Table.TableRow>
        </Table.TableHeader>
        <Table.TableBody>
          {decks &&
            decks.map(deck => (
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
                    to={`/${deck.id}/cards`}
                    variant={'body2'}
                  >
                    {deck.name}
                  </Typography>
                </Table.TableCell>
                <Table.TableCell>{deck.cardsCount}</Table.TableCell>
                <Table.TableCell className={s.cell}>{dateFormater(deck.updated)}</Table.TableCell>
                <Table.TableCell>{deck.author.name}</Table.TableCell>
                <Table.TableCell>
                  {deck.cardsCount !== 0 && (
                    <Button as={Link} to={`/${deck.id}/learn/${deck.name}`} variant={'text'}>
                      <PlayIcon height={16} width={16} />
                    </Button>
                  )}
                  {currentUser === deck.author.id && (
                    <DeleteDeck id={deck.id} name={deck.name}>
                      <Button variant={'text'}>
                        <DeleteIcon height={16} width={16} />{' '}
                      </Button>
                    </DeleteDeck>
                  )}
                </Table.TableCell>
              </Table.TableRow>
            ))}
        </Table.TableBody>
      </Table.Root>
    </div>
  )
}
