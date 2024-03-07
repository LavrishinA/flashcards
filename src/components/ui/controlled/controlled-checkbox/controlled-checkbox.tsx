import { useController } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '@/components/Checkbox'

type ControlledCheckboxProps = {
  control: any
  name: string
} & Omit<CheckboxProps, 'name'>

export const ControlledCheckbox = ({ control, ...rest }: ControlledCheckboxProps) => {
  const {
    field: { onChange, value },
  } = useController({
    control,
    name: rest.name,
  })

  return <Checkbox checked={value} onCheckedChange={onChange} {...rest} />
}
