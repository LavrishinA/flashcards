import { useState } from 'react'

import { useDeleteDeckMutation } from '@/entities/decks'
import { Button } from '@/shared/ui/Button'
import { Modal } from '@/shared/ui/Modal/Modal'
import { Typography } from '@/shared/ui/Typography'
import { DeleteIcon } from '@/shared/ui/icons'

import s from './DeleteDeck.module.scss'

type Props = {
  id: string
  name: string
}

export const DeleteDeck = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { id, name } = props
  const [deleteDeck] = useDeleteDeckMutation()

  const deleteDeckHandler = () => {
    deleteDeck({ id })
  }

  return (
    <>
      <Button
        icon={<DeleteIcon height={16} width={16} />}
        onClick={() => setIsOpen(true)}
        variant={'text'}
      />
      <Modal onOpenChange={setIsOpen} open={isOpen} title={'Delete deck'}>
        <div className={s.modalContent}>
          <Typography as={'p'} variant={'body1'}>
            Do you really want to remove <span className={s.deckName}>{name}</span> deck?
            <br />
            All cards will be deleted.
          </Typography>
          <div className={s.modalFooter}>
            <Button label={'Cancel'} onClick={() => setIsOpen(false)} variant={'secondary'} />
            <Button label={'Delete Deck'} onClick={deleteDeckHandler} variant={'primary'} />
          </div>
        </div>
      </Modal>
    </>
  )
}
