import { Button } from '@/shared/ui/Button'
// import { Card } from '@/shared/ui/Card'
import { Input } from '@/shared/ui/Input'
import { Typography } from '@/shared/ui/Typography'
// import { Close } from '@/shared/ui/icons/close'

import s from './CreateCardForm.module.scss'

export const CreateCardForm = () => {
  return (
    // <form className={s.formContainer}>
    <form>
      {/*<Card className={s.container}>*/}
      {/*<div className={s.header}>*/}
      {/*  <Typography className={s.headerText} variant={'h3'}>*/}
      {/*    Add New Card*/}
      {/*  </Typography>*/}
      {/*  <button className={s.button}>*/}
      {/*    <Close />*/}
      {/*  </button>*/}
      {/*</div>*/}
      <div className={s.content}>
        <Typography variant={'subtitle2'}>Question:</Typography>
        <Input className={s.input} label={'Question?'}></Input>
        <Typography className={s.input} variant={'subtitle2'}>
          Answer:
        </Typography>
        <Input label={'Answer?'}></Input>
      </div>
      <div className={s.footer}>
        <Button variant={'secondary'}>Cancel</Button>
        <Button variant={'primary'}>Add New Card</Button>
      </div>
      {/*</Card>*/}
    </form>
  )
}
