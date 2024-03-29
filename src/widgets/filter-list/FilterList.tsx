import { useGetMinMaxQuery } from '@/entities/filters'
import { useMeQuery } from '@/entities/user'
import { MinMaxCards } from '@/features/filters'
import { MyAllCards } from '@/features/filters/ui/MyAllCards'

import s from './FilterList.module.scss'

export const FilterList = () => {
  const { data } = useGetMinMaxQuery()
  const { data: user } = useMeQuery()

  return (
    <div className={s.filtersContainer}>
      {user && <MyAllCards authorId={user.id} />}
      {data && <MinMaxCards {...data} />}
    </div>
  )
}
