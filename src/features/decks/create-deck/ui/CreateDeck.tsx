import { useState } from 'react'
import { toast } from 'react-toastify'

import { useCreateDeckMutation } from '@/entities/decks/api/decks-api'
import { FormState } from '@/features/decks/deck-form/model/types'
import { DeckForm } from '@/features/decks/deck-form/ui/DeckForm'
import { Button } from '@/shared/ui/Button'
import { Dialog, DialogContent, DialogTrigger } from '@/shared/ui/Dialog'

export const CreateDeck = () => {
  const [createDeck] = useCreateDeckMutation()
  const [isOpen, setIsOpen] = useState(false)

  const createDeckHandler = (data: FormState) => {
    const formData = new FormData()

    formData.append('name', data.name)
    if (data.isPrivate) {
      formData.append('isPrivate', data?.isPrivate.toString())
    }
    if (data.cover) {
      formData.append('cover', data.cover?.[0])
    } else {
      formData.append('cover', '')
    }

    return createDeck(formData)
      .unwrap()
      .then(() => {
        toast.success(`Deck ${data.name} has been created successfully.`)
      })
      .finally(() => setIsOpen(false))
  }

  return (
    <>
      <Dialog onOpenChange={setIsOpen} open={isOpen}>
        <DialogTrigger asChild>
          <Button>Create Deck</Button>
        </DialogTrigger>
        <DialogContent title={'Add New Deck'}>
          <DeckForm
            btnTitle={'Add New Pack'}
            coverTitle={'Upload Image'}
            onSubmit={createDeckHandler}
          />
        </DialogContent>
      </Dialog>
    </>
  )
}
