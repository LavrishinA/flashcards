import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDeleteDeckMutation } from '@/entities/decks'
import { Button } from '@/shared/ui/Button'
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '@/shared/ui/Dialog'
import { Typography } from '@/shared/ui/Typography'

import s from './DeleteDeck.module.scss'

type Props = {
  children: ReactNode
  id: string
  name: string
}

export const DeleteDeck = (props: Props) => {
  const { children, id, name } = props
  const [deleteDeck, { isLoading }] = useDeleteDeckMutation()
  const navigate = useNavigate()

  const deleteDeckHandler = () => {
    deleteDeck({ id })
    navigate('/')
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent title={'Delete deck'}>
        <div className={s.modalContent}>
          <Typography as={'p'} variant={'body1'}>
            Do you really want to remove <span className={s.deckName}>{name}</span> deck?
            <br />
            All cards will be deleted.
          </Typography>
          <div className={s.modalFooter}>
            <DialogClose asChild>
              <Button variant={'secondary'}>Cancel</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button disabled={isLoading} onClick={deleteDeckHandler} variant={'primary'}>
                Delete Deck
              </Button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
