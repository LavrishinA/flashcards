export type FormValues = {
  email: string
  html?: string
  subject?: string
}

export type Props = {
  onSubmit: (data: FormValues) => void
}
