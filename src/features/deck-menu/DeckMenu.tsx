import { useNavigate } from 'react-router-dom'

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

  const navigateToLearnDeck = () => navigate(`/${deck?.id}/learn/${deck?.name}`)

  return (
    <DropdownMenu>
      <DropdownTrigger>
        <DropDownTriggerIcon height={16} width={16} />
      </DropdownTrigger>
      <DropDownContent>
        <DropdownItem onClick={navigateToLearnDeck}>
          <PlayIcon height={16} width={16} /> Learn
        </DropdownItem>
        <DropdownItem>
          <EditIcon height={16} width={16} /> Edit
        </DropdownItem>
        <DeleteDeck id={id} name={deck.name}>
          <DropdownItem onSelect={e => e.preventDefault()}>
            <DeleteIcon height={16} width={16} /> Delete
          </DropdownItem>
        </DeleteDeck>
      </DropDownContent>
    </DropdownMenu>
  )
}
