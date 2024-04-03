import { useCreateDeckMutation } from '@/entities/decks/api/decks-api'
import { CreateDeckArgs } from '@/entities/decks/model/types'
import { Modal } from '@/shared/ui/Modal/Modal'

import s from '@/pages/edit-profile-page/ui/EditPage.module.scss'

export const CreateDeckModal = () => {
  const [createDeck] = useCreateDeckMutation()

  const submitForm = (data: CreateDeckArgs) => {
    const formData = { cover: data.cover, name: data.name }

    new FormData()

    formData.append('cover', data.cover)
    formData.append('name', data.name)

    return createDeck(formData).unwrap()
  }

  return <Modal isOpen={}></Modal>
}
