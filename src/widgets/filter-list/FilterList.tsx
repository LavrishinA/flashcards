import { useGetMinMaxQuery } from '@/entities/filters'
import { MinMaxCards } from '@/features/filters'
import { MyAllCards } from '@/features/filters/ui/MyAllCards'
import { SearchCards } from '@/features/filters/ui/SearchCards'

import s from './FilterList.module.scss'

type Props = {
  userId: string
}

export const FilterList = ({ userId }: Props) => {
  const { data } = useGetMinMaxQuery()

  return (
    <div className={s.filtersContainer}>
      <SearchCards />
      <MyAllCards authorId={userId} />
      {data && <MinMaxCards {...data} />}
    </div>
  )
}
