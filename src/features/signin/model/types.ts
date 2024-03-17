export type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

export type Props = {
  onSubmit: (data: FormValues) => void
}
