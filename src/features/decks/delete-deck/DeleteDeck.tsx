import { ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { useDeleteDeckMutation } from '@/entities/decks'
import { Deck } from '@/entities/decks/model/types'
import { Button } from '@/shared/ui/Button'
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '@/shared/ui/Dialog'
import { Typography } from '@/shared/ui/Typography'

import s from './DeleteDeck.module.scss'

type Props = {
  children: ReactNode
  deck: Deck
  id: string
  name: string
}

export const DeleteDeck = (props: Props) => {
  const { children, deck, id, name } = props
  const [deleteDeck, { isLoading }] = useDeleteDeckMutation()
  const navigate = useNavigate()
  const location = useLocation()

  const deleteDeckHandler = () => {
    deleteDeck({ id })
    if (location.pathname === `/${deck.id}/cards`) {
      navigate(-1)
    }
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
