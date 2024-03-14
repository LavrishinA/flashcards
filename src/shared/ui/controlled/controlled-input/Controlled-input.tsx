import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Input, InputProps } from '@/shared/ui/Input'

type ControlledInputProps<T extends FieldValues> = Omit<
  UseControllerProps<T>,
  'defaultValue' | 'rules'
> &
  Omit<InputProps, 'id' | 'onChange' | 'value'>

export const ControlledInput = <T extends FieldValues>({
  control,
  shouldUnregister,
  ...rest
}: ControlledInputProps<T>) => {
  const {
    field: { onChange, value },
  } = useController({
    control,
    disabled: rest.disabled,
    name: rest.name,
    shouldUnregister,
  })

  return <Input {...rest} onChange={onChange} value={value} />
}
