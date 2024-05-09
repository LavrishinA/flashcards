import { ReactElement } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

import { Card } from '@/entities/decks/model/types'
import { useMeQuery } from '@/entities/user'
import { DeleteCard } from '@/features/cards/delete-card'
import { UpdateCard } from '@/features/cards/update-card/ui/UpdateCard'
import { dateFormater } from '@/shared/lib/dateFormater'
import { Button } from '@/shared/ui/Button'
import { Rating } from '@/shared/ui/Rating'
import { Table } from '@/shared/ui/Table'
import { DeleteIcon, EditIcon } from '@/shared/ui/icons'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'

import s from './CardsList.module.scss'

type Props = {
  cards: Card[]
  currentDeck: string
  loadingCards: boolean
}

export const CardsList = (props: Props) => {
  const { cards } = props

  const { data: user } = useMeQuery()

  return (
    <div className={s.cardsListContainer}>
      <Table.Root className={s.root}>
        <Table.TableHeader className={s.cellHead}>
          <Table.TableRow>
            <Table.TableCellHead>Question</Table.TableCellHead>
            <Table.TableCellHead>Answer</Table.TableCellHead>
            <Table.TableCellHead>Last Updated</Table.TableCellHead>
            <Table.TableCellHead>Grade</Table.TableCellHead>
            <Table.TableCellHead></Table.TableCellHead>
          </Table.TableRow>
        </Table.TableHeader>
        <Table.TableBody>
          {cards &&
            cards.map(card =>
              props.loadingCards ? (
                <CardsSkeleton count={cards.length} />
              ) : (
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
                    <Rating maxStar={5} onClick={() => {}} rating={card.grade} readonly size={15} />
                  </Table.TableCell>
                  {user?.id === card.userId && (
                    <Table.TableCell className={s.sell}>
                      <UpdateCard card={card}>
                        <Button variant={'text'}>
                          <EditIcon height={16} width={16} />
                        </Button>
                      </UpdateCard>

                      <DeleteCard card={card} id={card.id}>
                        <Button variant={'text'}>
                          <DeleteIcon height={16} width={16} />
                        </Button>
                      </DeleteCard>
                    </Table.TableCell>
                  )}
                </Table.TableRow>
              )
            )}
        </Table.TableBody>
      </Table.Root>
    </div>
  )
}

export const CardsSkeleton = ({ count }: { count: number }): ReactElement => {
  console.log('skeleton')

  return (
    <>
      {Array(count)
        .fill(null)
        .map((_, index) => (
          <SkeletonTheme baseColor={'#202020'} highlightColor={'#444'} key={index}>
            <Table.TableRow>
              <Table.TableCell>
                <Skeleton />
              </Table.TableCell>
              <Table.TableCell>
                <Skeleton />
              </Table.TableCell>
              <Table.TableCell>
                <Skeleton />
              </Table.TableCell>
              <Table.TableCell>
                <Skeleton />
              </Table.TableCell>
              <Table.TableCell>
                <Skeleton />
              </Table.TableCell>
            </Table.TableRow>
          </SkeletonTheme>
        ))}
    </>
  )
}
