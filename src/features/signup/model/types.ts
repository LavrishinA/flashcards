export type FormValues = {
  confirm: string
  email: string
  password: string
}

export type Props = {
  onSubmit: (data: FormValues) => void
}
