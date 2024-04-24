import { useState } from 'react'

import { gradeOptions } from '@/features/set-grade/model/radio-froup-options'
import { Button } from '@/shared/ui/Button'
import { RadioGroup } from '@/shared/ui/RadioGroup'
import { Typography } from '@/shared/ui/Typography'

type Props = {
  onSave: (value: string) => void
}

export const SetGrade = ({ onSave }: Props) => {
  const [grade, setGrade] = useState('1')

  const setGradeHandler = (value: string) => {
    setGrade(value)
  }

  return (
    <div>
      <Typography variant={'subtitle1'}>Rate yourself:</Typography>
      <RadioGroup onValueChange={setGradeHandler} options={gradeOptions} value={grade} />
      <Button fullWidth onClick={() => onSave(grade)}>
        Next Question
      </Button>
    </div>
  )
}
