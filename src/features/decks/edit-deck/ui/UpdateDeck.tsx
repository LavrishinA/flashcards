import { ReactNode, useState } from 'react'

import { useEditDeckMutation } from '@/entities/decks/api/decks-api'
import { Deck } from '@/entities/decks/model/types'
import { FormState } from '@/features/decks/edit-deck/model/types'
import { Dialog, DialogContent, DialogTrigger } from '@/shared/ui/Dialog'

import { UpdateDeckForm } from './UpdateDeckForm'

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
      .finally(() => setIsOpen(false))
  }

  return (
    <>
      <Dialog onOpenChange={setIsOpen} open={isOpen}>
        <DialogTrigger asChild name={'Edit'}>
          {children}
        </DialogTrigger>
        <DialogContent title={'Edit Deck'}>
          <UpdateDeckForm deck={deck} onSubmit={updateDeckHandler} />
        </DialogContent>
      </Dialog>
    </>
  )
}
