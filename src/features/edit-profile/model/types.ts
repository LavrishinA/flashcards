export type FormValues = { avatar: FileList; name: string }

export type Props = {
  onSubmit: (data: FormValues) => void
}
