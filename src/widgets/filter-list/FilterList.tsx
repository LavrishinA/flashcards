import { useGetMinMaxQuery } from '@/entities/filters'
import { useMeQuery } from '@/entities/user'
import { MinMaxCards } from '@/features/filters'
import { MyAllCards } from '@/features/filters/ui/MyAllCards'
import { SearchCards } from '@/features/filters/ui/SearchCards'

export const FilterList = () => {
  const { data } = useGetMinMaxQuery()
  const { data: user } = useMeQuery()

  return (
    <div>
      {data && <MinMaxCards {...data} />}
      {user && <MyAllCards authorId={user.id} />}
      <SearchCards />
    </div>
  )
}
