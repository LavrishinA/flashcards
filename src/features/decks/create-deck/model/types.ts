export type FormValues = { cover?: FileList | null; isPrivate?: boolean; name: string }

export type Props = {
  onSubmit: (data: FormValues) => void
}
