import { ReactNode } from 'react'

import { useDeleteCardMutation } from '@/entities/cards'
import { Card } from '@/entities/decks/model/types'
import { Button } from '@/shared/ui/Button'
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '@/shared/ui/Dialog'
import { Typography } from '@/shared/ui/Typography'

import s from './DeleteCard.module.scss'

type Props = {
  card: Card
  children: ReactNode
  id: string
}

export const DeleteCard = ({ card, children, id }: Props) => {
  const [deleteCard, { isLoading }] = useDeleteCardMutation()

  const deleteCardHandler = () => {
    deleteCard({ id })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent title={'Delete card'}>
        <div className={s.modalContent}>
          <Typography as={'p'} variant={'body1'}>
            Do you really want to remove card <span className={s.cardName}>{card.question}</span>?
          </Typography>
          <div className={s.modalFooter}>
            <DialogClose asChild>
              <Button variant={'secondary'}>Cancel</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button disabled={isLoading} onClick={deleteCardHandler} variant={'primary'}>
                Delete Card
              </Button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
