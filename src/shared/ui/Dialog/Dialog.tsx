import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography } from '@/shared/ui/Typography'
import { Close } from '@/shared/ui/icons/close'
import * as RadixModal from '@radix-ui/react-dialog'

import s from './Dialog.module.scss'

export type Props = ComponentPropsWithoutRef<typeof RadixModal.Content> & {
  title?: string
}

export const DialogContent = forwardRef<ElementRef<typeof RadixModal.Content>, Props>(
  ({ children, title, ...props }: Props, ref) => {
    return (
      <RadixModal.Portal>
        <RadixModal.Overlay className={s.overlay} />
        <RadixModal.Content className={s.content} ref={ref} {...props}>
          <div className={s.header}>
            <RadixModal.Title asChild>
              <Typography as={'span'} className={s.deckName} variant={'h3'}>
                {title}
              </Typography>
            </RadixModal.Title>
            <DialogClose className={s.closeButton}>
              <Close />
            </DialogClose>
          </div>
          {children}
        </RadixModal.Content>
      </RadixModal.Portal>
    )
  }
)

export const Dialog = RadixModal.Root
export const DialogTrigger = RadixModal.Trigger
export const DialogClose = RadixModal.Close
