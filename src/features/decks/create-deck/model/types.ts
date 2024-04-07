export type FormValues = { cover?: FileList; isPrivate?: boolean; name: string }

export type Props = {
  onSubmit: (data: FormValues) => void
}
