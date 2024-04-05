// export type DialogProps = ModalProps & {
//   cancelText?: string
//   confirmText?: string
//   onCancel?: () => void
//   onConfirm?: () => void
// }

export type FormValues = { cover?: FileList; isPrivate?: boolean; name: string }

export type Props = {
  onSubmit: (data: FormValues) => void
}
