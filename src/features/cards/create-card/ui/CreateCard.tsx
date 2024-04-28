import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { useCreateCardMutation } from '@/entities/decks/api/decks-api'
import { FormValues } from '@/features/cards/create-card/model/types'
import { CreateCardForm } from '@/features/cards/create-card/ui/CreateCardForm'
import { Button } from '@/shared/ui/Button'
import { Dialog, DialogContent, DialogTrigger } from '@/shared/ui/Dialog'

export const CreateCard = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [createCard] = useCreateCardMutation()
  const { deckId } = useParams<{ deckId: string }>()
  const createCardHandler = ({ answer, question }: FormValues) => {
    if (deckId) {
      createCard({ answer, id: deckId, question })
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
