import { Card } from '@/entities/decks/model/types'
import { DeleteCard } from '@/features/cards/delete-card'
import { dateFormater } from '@/shared/lib/dateFormater'
import { Button } from '@/shared/ui/Button'
import { Rating } from '@/shared/ui/Rating'
import { Table } from '@/shared/ui/Table'
import { DeleteIcon } from '@/shared/ui/icons'
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
      <Table.Root className={s.root}>
        <Table.TableHeader className={s.cellHead}>
          <Table.TableRow>
            <Table.TableCellHead>Question</Table.TableCellHead>
            <Table.TableCellHead>Answer</Table.TableCellHead>
            <Table.TableCellHead>Last Updated</Table.TableCellHead>
            <Table.TableCellHead>Grade</Table.TableCellHead>
            <Table.TableCellHead>Actions</Table.TableCellHead>
          </Table.TableRow>
        </Table.TableHeader>
        <Table.TableBody>
          {cards &&
            cards.map(card => (
              <Table.TableRow className={s.row} key={card.id}>
                <Table.TableCell className={s.cell}>
                  <div className={s.qa}>
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
                  </div>
                </Table.TableCell>
                <Table.TableCell className={s.cell}>
                  <div className={s.qa}>
                    {card.answerImg && (
                      <div className={s.ratioContainer}>
                        <AspectRatio ratio={21 / 9}>
                          <img
                            alt={''}
                            className={s.image}
                            loading={'lazy'}
                            src={card?.answerImg}
                          />
                        </AspectRatio>
                      </div>
                    )}
                    {card.answer}
                  </div>
                </Table.TableCell>
                <Table.TableCell className={s.cell}>{dateFormater(card.updated)}</Table.TableCell>
                <Table.TableCell className={s.cell}>
                  <Rating maxStar={5} onClick={() => {}} rating={card.grade} readonly size={14} />
                </Table.TableCell>
                <Table.TableCell className={s.cell}>
                  <DeleteCard card={card} id={card.id}>
                    <Button variant={'text'}>
                      <DeleteIcon height={16} width={16} />{' '}
                    </Button>
                  </DeleteCard>
                </Table.TableCell>
              </Table.TableRow>
            ))}
        </Table.TableBody>
      </Table.Root>
    </div>
  )
}
