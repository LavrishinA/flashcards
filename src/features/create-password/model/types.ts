export type FormValues = {
  password: string
  token: string
}

export type Props = {
  onSubmit: (data: FormValues) => void
}
