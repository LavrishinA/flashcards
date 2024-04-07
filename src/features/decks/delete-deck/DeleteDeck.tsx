import { useDeleteDeckMutation } from '@/entities/decks'
import { Button } from '@/shared/ui/Button'
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '@/shared/ui/Dialog'
import { Typography } from '@/shared/ui/Typography'
import { DeleteIcon } from '@/shared/ui/icons'

import s from './DeleteDeck.module.scss'

type Props = {
  id: string
  name: string
}

export const DeleteDeck = (props: Props) => {
  const { id, name } = props
  const [deleteDeck] = useDeleteDeckMutation()

  const deleteDeckHandler = () => {
    deleteDeck({ id })
  }

  return (
    <Dialog>
      <DialogTrigger>
        <DeleteIcon height={16} width={16} />
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
            <Button onClick={deleteDeckHandler} variant={'primary'}>
              Delete Deck
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
