import { Deck } from '@/entities/decks/model/types'

export type FormState = { cover?: FileList | null; isPrivate?: boolean; name: string }

export type Props = {
  btnTitle: string
  coverTitle: string
  deck?: Pick<Deck, 'cover' | 'isPrivate' | 'name'>
  onSubmit: (body: FormState) => void
}
