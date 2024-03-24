import { useGetMinMaxQuery } from '@/entities/filters'
import { MinMaxCards } from '@/features/filters'
import { MyAllCards } from '@/features/filters/ui/MyAllCards'

export const FilterList = () => {
  const { data } = useGetMinMaxQuery()

  return (
    <>
      <div>{data && <MinMaxCards {...data} />}</div>
      <div>{data && <MyAllCards {...data} />}</div>
    </>
  )
}
