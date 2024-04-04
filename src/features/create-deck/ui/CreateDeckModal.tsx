import { useCreateDeckMutation } from '@/entities/decks/api/decks-api'
import { CreateDeckForm } from '@/features/create-deck'
import { FormValues } from '@/features/create-deck/model/types'

export const CreateDeckModal = () => {
  const [createDeck] = useCreateDeckMutation()

  const submitForm = (data: FormValues) => {
    const formData = new FormData()

    console.log(data)
    formData.append('name', data.name)
    if (data.isPrivate) {
      formData.append('isPrivate', data?.isPrivate.toString())
    }
    if (data.cover) {
      formData.append('cover', data.cover?.[0])
      // console.log(data)
    }

    // console.log(data)

    return createDeck(formData).unwrap()
  }

  return <CreateDeckForm onSubmit={submitForm} />
}
