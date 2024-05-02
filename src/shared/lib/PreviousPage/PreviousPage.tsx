import { Link } from 'react-router-dom'

import { Typography } from '@/shared/ui/Typography'

export const PreviousPage = () => {
  return (
    <Typography
      as={Link}
      to={{
        pathname: '..',
        search: `${localStorage.getItem('searchUrl')}`,
      }}
      variant={'link2'}
    >
      Back to Deck List
    </Typography>
  )
}
