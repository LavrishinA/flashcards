import { useDeleteDeckMutation } from '@/entities/decks'
import { Button } from '@/shared/ui/Button'
import { DeleteIcon } from '@/shared/ui/icons'
type Props = {
  id: string
}

export const DeleteDeck = (props: Props) => {
  const { id } = props
  const [deleteDeck] = useDeleteDeckMutation()

  const deleteDeckHandler = () => {
    deleteDeck({ id })
  }

  return (
    <Button
      icon={<DeleteIcon height={16} width={16} />}
      onClick={deleteDeckHandler}
      variant={'text'}
    />
  )
}
