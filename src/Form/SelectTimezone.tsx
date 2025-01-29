import TimezoneSelect, { ITimezoneOption } from 'react-timezone-select'

export type TimezoneOption = ITimezoneOption

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
        className='pb-3 md:pb-5'
      >
        <TimezoneSelect
          classNames={{
            container() {
              return '!w-full'
            },
            control(props) {
              const stylecss = '!px-0 md:px-1 !rounded !border-2 !border-slate-300 !text-xs md:!text-sm !shadow-none'
              if (props.isFocused) return `${stylecss} !border-slate-500`

              return stylecss
            },
            dropdownIndicator(props) {
              const stylecss = '!py-1.5 md:!py-2 !px-2'
              if (props.isFocused) return `${stylecss} !text-slate-500`
              return `${stylecss} !text-slate-300`
            },
            indicatorSeparator() {
              return '!bg-slate-300'
            },
            singleValue() {
              return '!text-slate-800'
            },
            option(props) {
              const stylecss = '!text-slate-800 !text-xs md:!text-sm'

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
