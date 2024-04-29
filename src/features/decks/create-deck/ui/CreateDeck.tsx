import { useState } from 'react'

import { useCreateDeckMutation } from '@/entities/decks/api/decks-api'
import { CreateDeckForm } from '@/features/decks/create-deck'
import { FormValues } from '@/features/decks/create-deck/model/types'
import { Button } from '@/shared/ui/Button'
import { Dialog, DialogContent, DialogTrigger } from '@/shared/ui/Dialog'

export const CreateDeck = () => {
  const [createDeck] = useCreateDeckMutation()
  const [isOpen, setIsOpen] = useState(false)

  const createDeckHandler = (data: FormValues) => {
    const formData = new FormData()

    console.log(data.cover)
    formData.append('name', data.name)
    if (data.isPrivate) {
      formData.append('isPrivate', data?.isPrivate.toString())
    }
    if (data.cover) {
      formData.append('cover', data.cover?.[0])
    } else {
      formData.append('cover', '')
    }
    console.log(formData)

    return createDeck(formData)
      .unwrap()
      .finally(() => setIsOpen(false))
  }

  return (
    <>
      <Dialog onOpenChange={setIsOpen} open={isOpen}>
        <DialogTrigger asChild>
          <Button>Create Deck</Button>
        </DialogTrigger>
        <DialogContent title={'Add New Deck'}>
          <CreateDeckForm onSubmit={createDeckHandler} />
        </DialogContent>
      </Dialog>
    </>
  )
}
