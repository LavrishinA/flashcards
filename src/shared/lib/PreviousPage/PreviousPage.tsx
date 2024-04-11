import { useNavigate } from 'react-router-dom'

import { Button } from '@/shared/ui/Button'
import { Typography } from '@/shared/ui/Typography'

import s from './PreviousPage.module.scss'

export const PreviousPage = () => {
  const navigate = useNavigate()

  return (
    <Button className={s.prevpage} onClick={() => navigate(-1)} variant={'text'}>
      <Typography variant={'body2'}>&#8592; Back </Typography>
    </Button>
  )
}
