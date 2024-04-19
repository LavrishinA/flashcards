import { useSearchParams } from 'react-router-dom'

import { useGetMinMaxQuery } from '@/entities/filters'
import { MinMaxCards } from '@/features/filters'
import { MyAllCards } from '@/features/filters/ui/MyAllCards'
import { SearchCards } from '@/features/filters/ui/SearchCards'
import { Button } from '@/shared/ui/Button'
import { DeleteIcon } from '@/shared/ui/icons'

import s from './FilterList.module.scss'

type Props = {
  userId: string
}

export const FilterList = ({ userId }: Props) => {
  const { data } = useGetMinMaxQuery()
  const [, setSearchParams] = useSearchParams()

  return (
    <div className={s.filtersContainer}>
      <SearchCards name={'name'} />
      <MyAllCards authorId={userId} />
      {data && <MinMaxCards {...data} />}
      <Button className={s.clear} onClick={() => setSearchParams({})} variant={'secondary'}>
        <div className={s.contentWrapper}>
          <DeleteIcon height={17} width={17} />
          <span>Clear Filter</span>
        </div>
      </Button>
    </div>
  )
}
