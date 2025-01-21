import TimezoneSelect, { ITimezoneOption } from 'react-timezone-select'

import { Label } from './Label'

interface SelectTimezoneProps {
  value: string
  onChange: (timezone: ITimezoneOption) => void
  id?: string
  label?: string
  className?: string
  isRequired?: boolean
}

export const SelectTimezone = (props: SelectTimezoneProps) => {
  const {
    className, value = '', label = 'Zona horaria:', id,
    isRequired = false, onChange
  } = props

  return (
    <div
      className={className}
    >
      <Label
        htmlFor={id}
      >
        {label}
      </Label>

      <div
        className='pb-5'
      >
        <TimezoneSelect
          classNames={{
            control(props) {
              const stylecss = 'px-1 !rounded !border-2 !border-slate-300 !text-sm !shadow-none'
              if (props.isFocused) return `${stylecss} !border-slate-500`

              return stylecss
            },
            dropdownIndicator(props) {
              if (props.isFocused) return '!text-slate-500 !py-1.5 !px-2'
              return '!text-slate-300 !py-1.5 !px-2'
            },
            indicatorSeparator() {
              return '!bg-slate-300'
            },
            singleValue() {
              return '!text-slate-800'
            },
            option(props) {
              const stylecss = '!text-slate-800 !text-sm'

              if (props.isSelected) {
                return `${stylecss} !bg-slate-300`
              }

              if (props.isFocused) {
                return `${stylecss} !bg-neutral-200`
              }

              return stylecss
            }
          }}
          value={value}
          onChange={onChange}
          inputId={id}
          required={isRequired}
        />
      </div>
    </div>
  )
}
