import { ReactNode, useState } from 'react'
import { useParams } from 'react-router-dom'

import { GetCardResponse } from '@/entities/decks'
import { Button } from '@/shared/ui/Button'
import { Card } from '@/shared/ui/Card'
import { Typography } from '@/shared/ui/Typography'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'

import s from './LearnCard.module.scss'

export const LearnCard = (props: GetCardResponse & { children: ReactNode }) => {
  const { answer, answerImg, children, question, questionImg, shots } = props
  const [showAnswer, setShowAnswer] = useState<boolean>(false)
  const { deckName } = useParams()

  const showAnswerHandler = () => {
    setShowAnswer(prevState => !prevState)
  }

  return (
    <Card className={s.cards}>
      <div className={s.contentContainer}>
        <Typography variant={'h1'}>{`Learn "${deckName}"`}</Typography>
        <div>
          <Typography as={'p'} variant={'body1'}>{`Question: ${question}`}</Typography>

          {questionImg && (
            <div className={s.ratioContainer}>
              <AspectRatio ratio={21 / 9}>
                <img
                  alt={'question image'}
                  className={s.image}
                  loading={'lazy'}
                  src={questionImg}
                />
              </AspectRatio>
            </div>
          )}

          <Typography as={'span'} variant={'caption'}>
            Количество попыток ответов на вопрос: {shots}
          </Typography>
        </div>
        {!showAnswer && (
          <Button fullWidth onClick={showAnswerHandler}>
            Show answer
          </Button>
        )}

        {showAnswer && (
          <div>
            <Typography as={'p'} variant={'body1'}>{`Answer: ${answer}`}</Typography>
            {answerImg && (
              <div className={s.ratioContainer}>
                <AspectRatio ratio={21 / 9}>
                  <img alt={'answer image'} className={s.image} loading={'lazy'} src={answerImg} />
                </AspectRatio>
              </div>
            )}
          </div>
        )}
      </div>
      <div>{showAnswer && children}</div>
    </Card>
  )
}
