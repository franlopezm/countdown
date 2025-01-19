import TrashIcon from '../../Icons/TrashIcon'
import { DurationObject } from '../../services/DateAndTime/interfaces'
import { addLeftZero } from '../../services/numberNormalizer'
import CardNumber from './CardNumber'

interface DateItemProps {
  title: string
  dateText?: string
  duration: DurationObject
  isDisabled?: boolean
  onDelete?: () => void
}

const DateItem = (props: DateItemProps) => {
  const {
    title, dateText, duration, isDisabled = false, onDelete
  } = props

  const className = isDisabled
    ? `bg-neutral-200`
    : ''

  const onClickDelete = () => {
    const isOk = confirm(
      `Está seguro de que desea eliminar el temporizador:\n\n${title}\n${dateText}\n`
    )

    if (isOk && onDelete) {
      onDelete()
    }
  }

  return (
    <div
      className={`mb-4 mr-4 p-4 px-6 max-w-max shadow-md border-2 rounded relative ${className}`}
    >
      <p className="font-bold text-sm text-sky-700">
        {title}
      </p>
      {
        dateText
          ? (
            <p className='text-base font-normal text-slate-600 mt-1'>
              {dateText}
            </p>
          ) : null
      }

      <div className='flex justify-between content-between mt-2'>
        <CardNumber
          title='Años'
          number={duration.years}
          isDisabled={isDisabled}
        />
        <CardNumber
          title='Meses'
          number={duration.months}
          isDisabled={isDisabled}
        />
        <CardNumber
          title='Días'
          number={duration.days}
          isDisabled={isDisabled}
        />
        <CardNumber
          title='Horas'
          number={addLeftZero(duration.hours)}
          isDisabled={isDisabled}
        />
        <CardNumber
          title='Minutos'
          number={addLeftZero(duration.minutes)}
          isDisabled={isDisabled}
        />
        <CardNumber
          title='Segundos'
          number={addLeftZero(duration.seconds)}
          isDisabled={isDisabled}
        />
      </div>

      {
        onDelete ? (
          <div
            className='absolute top-4 right-4'
          >
            <button
              type='button'
              className='text-slate-600 hover:text-red-800'
              title='Eliminar'
              onClick={onClickDelete}
            >
              <TrashIcon
                size='size-5'
              />
            </button>
          </div>
        ) : null
      }
    </div>
  )
}

export default DateItem
