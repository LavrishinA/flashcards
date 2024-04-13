import { useNavigate } from 'react-router-dom'

import { useDeleteDeckMutation } from '@/entities/decks'
import { Deck } from '@/entities/decks/model/types'
import { DeleteDeck } from '@/features/decks/delete-deck'
import { DropDownContent, DropdownMenu, DropdownTrigger } from '@/shared/ui/DropDown'
import { DropdownItem } from '@/shared/ui/DropDown/Item'
import { DeleteIcon, DropDownTriggerIcon, EditIcon, PlayIcon } from '@/shared/ui/icons'

type Props = {
  deck: Deck
  id: string
}

export const DeckMenu = ({ deck, id }: Props) => {
  const navigate = useNavigate()

  const [deleteDeck] = useDeleteDeckMutation()

  const deleteDeckHandler = () => {
    deleteDeck({ id })
  }

  const navigateToLearnDeck = () => navigate(`/${deck?.id}/learn/${deck?.name}`)

  return (
    <DropdownMenu>
      <DropdownTrigger>
        <DropDownTriggerIcon height={16} width={16} />
      </DropdownTrigger>
      <DropDownContent>
        <DropdownItem
          icon={<PlayIcon height={16} width={16} />}
          label={'Learn'}
          onClick={navigateToLearnDeck}
        />
        <DropdownItem icon={<EditIcon height={16} width={16} />} label={'Edit'} />
        <DropdownItem
          icon={<DeleteIcon height={16} width={16} />}
          label={'Delete'}
          onClick={deleteDeckHandler}
        >
          <DeleteDeck id={id} name={deck.name} />
        </DropdownItem>
      </DropDownContent>
    </DropdownMenu>
  )
}
