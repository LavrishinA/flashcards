import { ReactNode, useState } from 'react'
import { toast } from 'react-toastify'

import { useEditDeckMutation } from '@/entities/decks/api/decks-api'
import { Deck } from '@/entities/decks/model/types'
import { FormState } from '@/features/decks/deck-form/model/types'
import { DeckForm } from '@/features/decks/deck-form/ui/DeckForm'
import { Dialog, DialogContent, DialogTrigger } from '@/shared/ui/Dialog'

type Props = {
  children: ReactNode
  deck: Deck
}

export const UpdateDeck = ({ children, deck }: Props) => {
  const [editDeck] = useEditDeckMutation()
  const [isOpen, setIsOpen] = useState(false)

  const updateDeckHandler = (data: FormState) => {
    const body = new FormData()

    body.append('name', data.name)
    if (typeof data?.isPrivate === 'boolean') {
      body.append('isPrivate', data?.isPrivate.toString())
    }
    if (data.cover) {
      body.append('cover', data.cover?.[0])
    } else {
      body.append('cover', '')
    }

    return editDeck({ body: body, id: deck.id })
      .unwrap()
      .then(() => {
        toast.success(`Deck ${data.name} has been updated successfully.`)
      })
      .finally(() => setIsOpen(false))
  }

  return (
    <>
      <Dialog onOpenChange={setIsOpen} open={isOpen}>
        <DialogTrigger asChild name={'Edit'}>
          {children}
        </DialogTrigger>
        <DialogContent title={'Edit Deck'}>
          <DeckForm
            btnTitle={'Edit Deck'}
            coverTitle={'Change Cover'}
            deck={deck}
            label={'Change Name'}
            onSubmit={updateDeckHandler}
          />
        </DialogContent>
      </Dialog>
    </>
  )
}
