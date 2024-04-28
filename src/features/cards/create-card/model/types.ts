export type FormValues = {
  answer: string
  id: string
  question: string
}

export type Props = {
  onSubmit: (data: FormValues) => void
}
