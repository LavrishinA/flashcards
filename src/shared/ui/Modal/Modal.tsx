import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography } from '@/shared/ui/Typography'
import { Close } from '@/shared/ui/icons/close'
import * as RadixModal from '@radix-ui/react-dialog'

import s from './modal.module.scss'

export type Props = ComponentPropsWithoutRef<typeof RadixModal.Root> & {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
  title?: string
}

export const Modal = forwardRef<ElementRef<typeof RadixModal.Root>, Props>(
  ({ children, title, ...props }: Props, ref) => {
    return (
      <RadixModal.Root {...props}>
        <RadixModal.Portal>
          <RadixModal.Overlay className={s.overlay} />
          <RadixModal.Content className={s.content} ref={ref}>
            <div className={s.header}>
              <RadixModal.Title asChild>
                <Typography variant={'h2'}>{title}</Typography>
              </RadixModal.Title>
              <RadixModal.Close className={s.closeButton}>
                <Close />
              </RadixModal.Close>
            </div>
            {children}
          </RadixModal.Content>
        </RadixModal.Portal>
      </RadixModal.Root>
    )
  }
)
