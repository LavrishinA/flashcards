import { ModalProps } from '@/shared/ui/Modal/Modal'

export type DialogProps = ModalProps & {
  cancelText?: string
  confirmText?: string
  onCancel?: () => void
  onConfirm?: () => void
}

export type FormValues = { cover?: File; isPrivate?: boolean; name: string }

export type Props = {
  onSubmit: (data: FormValues) => void
}
