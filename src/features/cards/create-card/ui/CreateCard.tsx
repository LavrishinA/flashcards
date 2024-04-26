import { useState } from 'react'

import { CreateCardForm } from '@/features/cards/create-card/ui/CreateCardForm'
import { Button } from '@/shared/ui/Button'
import { Dialog, DialogContent, DialogTrigger } from '@/shared/ui/Dialog'

export const CreateCard = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Dialog onOpenChange={setIsOpen} open={isOpen}>
        <DialogTrigger asChild>
          <Button>Add New Card</Button>
        </DialogTrigger>
        <DialogContent title={'Add New Card'}>
          <CreateCardForm />
        </DialogContent>
      </Dialog>
    </>
  )
}
