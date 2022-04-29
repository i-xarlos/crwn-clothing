import { InputHTMLAttributes, FC } from 'react'
import { Group, Input, FormInputLabel } from './form-input.styles'

type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input className='form-input' {...otherProps} />

      {label && (
        <FormInputLabel
          shrink={Boolean(
            otherProps.value &&
              typeof otherProps.value === 'string' &&
              otherProps.value.length
          )}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  )
}

export default FormInput
