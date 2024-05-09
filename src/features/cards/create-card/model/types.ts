export type FormValues = {
  answer: string
  answerImg?: FileList | null
  question: string
  questionImg?: FileList | null
}

export type Props = {
  onSubmit: (data: FormValues) => void
}
