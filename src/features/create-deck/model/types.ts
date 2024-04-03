import { ModalProps } from '@/shared/ui/Modal/Modal'

export type DialogProps = ModalProps & {
  cancelText?: string
  confirmText?: string
  onCancel?: () => void
  onConfirm?: () => void
}
