import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { Slider } from '@/shared/ui/Slider'
import { Typography } from '@/shared/ui/Typography'

type Props = {
  max: number
  min: number
}

export const MinMaxCards = ({ max, min }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentMin = Number(searchParams.get('minCardsCount'))
  const currentMax = Number(searchParams.get('maxCardsCount'))
  const [values, setValues] = useState([currentMin ?? min, currentMax ?? max])

  const sliderCommitValueHandler = (values: number[]) => {
    searchParams.set('currentPage', `1`)
    searchParams.set('minCardsCount', `${values[0]}`)
    searchParams.set('maxCardsCount', `${values[1]}`)
    setSearchParams(searchParams)
  }

  const sliderChangeValueHandler = (values: number[]) => {
    setValues(values)
  }

  useEffect(() => {
    currentMin || currentMax || setValues([min, max])
  }, [currentMin, currentMax, min, max])

  return (
    <div>
      <Typography as={'span'} variant={'body2'}>
        Number of cards
      </Typography>
      <Slider
        max={max}
        min={min}
        onValueChange={sliderChangeValueHandler}
        onValueCommit={sliderCommitValueHandler}
        value={values}
      />
    </div>
  )
}
