import { DeckItem } from '@/entities/decks'
import { DeleteDeck } from '@/features/decks/delete-deck/DeleteDeck'
import { dateFormater } from '@/shared/lib/dateFormater'
import { Table } from '@/shared/ui/Table'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'

import s from './DeckList.module.scss'

type Props = {
  currentUser: string
  decks: DeckItem[]
}

export const DeckList = (props: Props) => {
  const { currentUser, decks } = props

  return (
    <div>
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
                  {d.name}
                </Table.TableCell>
                <Table.TableCell>{d.cardsCount}</Table.TableCell>
                <Table.TableCell>{dateFormater(d.updated)}</Table.TableCell>
                <Table.TableCell>{d.author.name}</Table.TableCell>
                <Table.TableCell>
                  {currentUser === d.author.id && <DeleteDeck id={d.id} />}
                </Table.TableCell>
              </Table.TableRow>
            ))}
        </Table.TableBody>
      </Table.Root>
    </div>
  )
}
