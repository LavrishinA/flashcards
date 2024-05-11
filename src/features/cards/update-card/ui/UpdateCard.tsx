import { ReactNode, useState } from 'react'
import { toast } from 'react-toastify'

import { useUpdateCardMutation } from '@/entities/cards/api/cards-api'
import { Card } from '@/entities/decks/model/types'
import { FormValues } from '@/features/cards/card-form/model/types'
import { CardForm } from '@/features/cards/create-card'
import { Dialog, DialogContent, DialogTrigger } from '@/shared/ui/Dialog'

type Props = {
  card: Card
  children: ReactNode
}

export const UpdateCard = ({ card, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [updateCard] = useUpdateCardMutation()

  const updateCardHandler = async (data: FormValues) => {
    const form = new FormData()

    form.append('question', data.question)
    form.append('answer', data.answer)
    if (data.questionImg) {
      form.append('questionImg', data.questionImg?.[0])
    }
    if (data.answerImg) {
      form.append('answerImg', data.answerImg?.[0])
    }
    updateCard({ data: form, id: card.id })
      .unwrap()
      .then(() => {
        toast.success(`Card has been updated successfully.`)
      })
      .finally(() => setIsOpen(false))
  }

  return (
    <>
      <Dialog onOpenChange={setIsOpen} open={isOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent title={'Edit Card'}>
          <CardForm card={card} onSubmit={updateCardHandler} />
        </DialogContent>
      </Dialog>
    </>
  )
}
