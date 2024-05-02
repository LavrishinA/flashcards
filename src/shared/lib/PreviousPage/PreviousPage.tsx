import { Link } from 'react-router-dom'

import { Typography } from '@/shared/ui/Typography'

import s from './PreviousPage.module.scss'

export const PreviousPage = () => {
  return (
    <Typography
      as={Link}
      className={s.prevpage}
      to={{
        pathname: '..',
        search: `${localStorage.getItem('searchUrl')}`,
      }}
      variant={'body2'}
    >
      🡠 Back to Decks List
    </Typography>
  )
}
