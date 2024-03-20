import { useGetMinMaxQuery } from '@/entities/filters'
import { MinMaxCards } from '@/features/filters'

export const FilterList = () => {
  const { data } = useGetMinMaxQuery()

  return <div>{data && <MinMaxCards {...data} />}</div>
}
