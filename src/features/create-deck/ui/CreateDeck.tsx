import { useState } from 'react'

import { useCreateDeckMutation } from '@/entities/decks/api/decks-api'
import { CreateDeckArgs } from '@/entities/decks/model/types'
import { Button } from '@/shared/ui/Button'
import { Modal } from '@/shared/ui/Modal/Modal'

export const CreateDeck = () => {
  const [createDeck] = useCreateDeckMutation()
  const [open, setOpen] = useState(false)

  const createDeckHandler = (data: CreateDeckArgs) => {
    return createDeck(data)
      .unwrap()
      .then(() => {})
      .catch(e => console.log(e)) //todo toast
  }

  return (
    <>
      <Button onClick={() => setOpen(true)}>Add New Deck</Button>
      <Modal isOpen={open} onOpenChange={() => setOpen(true)} title={'Add New Deck'}>
        <Button name={'Add New Pack'} />
        <Button name={'Cancel'} />
      </Modal>
    </>
  )
}
