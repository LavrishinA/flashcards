import { ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useDeleteDeckMutation } from '@/entities/decks'
import { isErrorWithMessage } from '@/shared/lib/isErrorWithMessage'
import { isFetchBaseQueryError } from '@/shared/lib/isFetchBaseQueryError'
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
  const location = useLocation()

  const deleteDeckHandler = async () => {
    try {
      await deleteDeck({ id }).unwrap()
      toast.success('Deck deleted successfully.')
      if (location.pathname.includes('cards')) {
        navigate(-1)
      }
    } catch (err) {
      if (isFetchBaseQueryError(err)) {
        const errMsg = 'error' in err ? err.error : JSON.stringify(err.data)

        toast.error(errMsg)
      } else if (isErrorWithMessage(err)) {
        toast.error(err.message)
      }
    }
  }
  const notify = () => toast.warn(`You're going to completely remove the deck with name ${name}`)

  return (
    <Dialog>
      <DialogTrigger asChild onClick={notify}>
        {children}
      </DialogTrigger>
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
