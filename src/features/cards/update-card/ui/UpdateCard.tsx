import { ReactNode, useState } from 'react'
import { toast } from 'react-toastify'

import { useUpdateCardMutation } from '@/entities/cards/api/cards-api'
import { Card } from '@/entities/decks/model/types'
import { CardForm } from '@/features/cards/create-card'
import { CardFormValues } from '@/features/cards/create-card/model/card-form-zod-schema'
// import { FormValues } from '@/features/cards/update-card/model/types'
import { Dialog, DialogContent, DialogTrigger } from '@/shared/ui/Dialog'

type Props = {
  card: Card
  children: ReactNode
}

export const UpdateCard = ({ card, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [updateCard] = useUpdateCardMutation()

  const updateCardHandler = (data: CardFormValues) => {
    const formData = new FormData()

    formData.append('answer', data.answer)
    formData.append('question', data.question)
    if (data.questionImg) {
      formData.append('questionImg', data.questionImg?.[0])
    } else {
      formData.append('questionImg', '')
    }
    if (data.answerImg) {
      formData.append('answerImg', data.answerImg?.[0])
    } else {
      formData.append('answerImg', '')
    }

    updateCard({ body: formData, id: card.id })
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
