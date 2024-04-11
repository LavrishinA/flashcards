import { Link } from 'react-router-dom'

import { DeckItem } from '@/entities/decks'
import { DeleteDeck } from '@/features/decks/delete-deck'
import { dateFormater } from '@/shared/lib/dateFormater'
import { Button } from '@/shared/ui/Button'
import { Table } from '@/shared/ui/Table'
import { Typography } from '@/shared/ui/Typography'
import { PlayIcon } from '@/shared/ui/icons'
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
        <Table.TableHeader>
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
            decks.map(d => (
              <Table.TableRow key={d.id}>
                <Table.TableCell className={s.name}>
                  {d.cover && (
                    <div className={s.ratioContainer}>
                      <AspectRatio ratio={21 / 9}>
                        <img alt={''} className={s.image} loading={'lazy'} src={d?.cover} />
                      </AspectRatio>
                    </div>
                  )}
                  <Typography as={Link} className={s.text} to={`/${d.id}/cards`} variant={'body2'}>
                    {d.name}
                  </Typography>
                </Table.TableCell>
                <Table.TableCell>{d.cardsCount}</Table.TableCell>
                <Table.TableCell>{dateFormater(d.updated)}</Table.TableCell>
                <Table.TableCell>{d.author.name}</Table.TableCell>
                <Table.TableCell>
                  {d.cardsCount !== 0 && (
                    <Button as={Link} to={`/${d.id}/learn/${d.name}`} variant={'text'}>
                      <PlayIcon height={16} width={16} />
                    </Button>
                  )}
                  {currentUser === d.author.id && <DeleteDeck id={d.id} name={d.name} />}
                </Table.TableCell>
              </Table.TableRow>
            ))}
        </Table.TableBody>
      </Table.Root>
    </div>
  )
}
