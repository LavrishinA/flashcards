import { useState } from 'react'

import { useCreateCardMutation } from '@/entities/decks/api/decks-api'
import { FormValues } from '@/features/cards/create-card/model/types'
import { CreateCardForm } from '@/features/cards/create-card/ui/CreateCardForm'
import { Button } from '@/shared/ui/Button'
import { Dialog, DialogContent, DialogTrigger } from '@/shared/ui/Dialog'

type Props = {
  deckId: string
}

export const CreateCard = ({ deckId }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [createCard] = useCreateCardMutation()
  const createCardHandler = (data: FormValues) => {
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

    if (deckId) {
      createCard({ body: formData, id: deckId })
        .unwrap()
        .finally(() => setIsOpen(false))
    }
  }

  return (
    <>
      <Dialog onOpenChange={setIsOpen} open={isOpen}>
        <DialogTrigger asChild>
          <Button>Add New Card</Button>
        </DialogTrigger>
        <DialogContent title={'Add New Card'}>
          <CreateCardForm onSubmit={createCardHandler} />
        </DialogContent>
      </Dialog>
    </>
  )
}
