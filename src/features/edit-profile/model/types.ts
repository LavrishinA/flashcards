export type FormValues = { avatar: FileList | null; name: string }

export type Props = {
  onSubmit: (data: FormValues) => void
}
