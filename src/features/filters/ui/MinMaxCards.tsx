import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { Slider } from '@/shared/ui/Slider'

type Props = { max: number; min: number }

export const MinMaxCards = ({ max, min }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [values, setValues] = useState([searchParams.get('minCardsCount') ?? min, max])

  const sliderCommitValueHandler = (values: number[]) => {
    searchParams.set('currentPage', `1`)
    searchParams.set('minCardsCount', `${values[0]}`)
    searchParams.set('maxCardsCount', `${values[1]}`)
    setSearchParams(searchParams)
  }

  return (
    <div>
      <Slider
        max={max}
        min={min}
        onValueChange={setValues}
        onValueCommit={sliderCommitValueHandler}
        value={values}
      />
    </div>
  )
}
