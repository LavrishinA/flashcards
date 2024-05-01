import { ReactNode, useState } from 'react'

import { useUpdateCardMutation } from '@/entities/cards/api/cards-api'
import { Card } from '@/entities/decks/model/types'
import { UpdateCardForm } from '@/features/cards/update-card'
import { FormValues } from '@/features/cards/update-card/model/types'
import { Dialog, DialogContent, DialogTrigger } from '@/shared/ui/Dialog'

type Props = {
  card: Card
  children: ReactNode
}

export const UpdateCard = ({ card, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [updateCard] = useUpdateCardMutation()
  const updateCardHandler = ({ answer, question }: FormValues) => {
    return updateCard({ answer, id: card.id, question })
      .unwrap()
      .finally(() => setIsOpen(false))
  }

  return (
    <>
      <Dialog onOpenChange={setIsOpen} open={isOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent title={'Edit Card'}>
          <UpdateCardForm card={card} onSubmit={updateCardHandler} />
        </DialogContent>
      </Dialog>
    </>
  )
}
