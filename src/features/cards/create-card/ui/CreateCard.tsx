import { useState } from 'react'
import { toast } from 'react-toastify'

import { useCreateCardMutation } from '@/entities/decks/api/decks-api'
import { CardForm } from '@/features/cards/card-form/ui/CardForm'
import { Button } from '@/shared/ui/Button'
import { Dialog, DialogContent, DialogTrigger } from '@/shared/ui/Dialog'

type Props = {
  deckId: string
}

export const CreateCard = ({ deckId }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [createCard] = useCreateCardMutation()

  const createCardHandler = (data: FormData) => {
    if (deckId) {
      createCard({ body: data, id: deckId })
        .unwrap()
        .then(() => {
          toast.success(`Card has been created successfully.`)
        })
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
          <CardForm onSubmit={createCardHandler} />
        </DialogContent>
      </Dialog>
    </>
  )
}
