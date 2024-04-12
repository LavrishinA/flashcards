import { Card } from '@/entities/decks/model/types'
import { dateFormater } from '@/shared/lib/dateFormater'
import { Table } from '@/shared/ui/Table'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'

import s from './CardsList.module.scss'

type Props = {
  cards: Card[]
  currentDeck: string
}

export const CardsList = (props: Props) => {
  const { cards } = props

  return (
    <div className={s.cardsListContainer}>
      <Table.Root>
        <Table.TableHeader>
          <Table.TableRow>
            <Table.TableCellHead>Question</Table.TableCellHead>
            <Table.TableCellHead>Answer</Table.TableCellHead>
            <Table.TableCellHead>Last Updated</Table.TableCellHead>
            <Table.TableCellHead>Grade</Table.TableCellHead>
            <Table.TableCellHead>Actions</Table.TableCellHead>
            <Table.TableCellHead>{''}</Table.TableCellHead>
          </Table.TableRow>
        </Table.TableHeader>
        <Table.TableBody>
          {cards &&
            cards.map(card => (
              <Table.TableRow key={card.id}>
                <Table.TableCell className={card.question}>
                  {card.questionImg && (
                    <div className={s.ratioContainer}>
                      <AspectRatio ratio={21 / 9}>
                        <img
                          alt={''}
                          className={s.image}
                          loading={'lazy'}
                          src={card?.questionImg}
                        />
                      </AspectRatio>
                    </div>
                  )}
                  {card.question}
                </Table.TableCell>
                <Table.TableCell>
                  {card.answerImg && (
                    <div className={s.ratioContainer}>
                      <AspectRatio ratio={21 / 9}>
                        <img alt={''} className={s.image} loading={'lazy'} src={card?.answerImg} />
                      </AspectRatio>
                    </div>
                  )}
                  {card.answer}
                </Table.TableCell>
                <Table.TableCell>{dateFormater(card.updated)}</Table.TableCell>
                <Table.TableCell>{card.grade}</Table.TableCell>
                <Table.TableCell></Table.TableCell>
              </Table.TableRow>
            ))}
        </Table.TableBody>
      </Table.Root>
    </div>
  )
}
