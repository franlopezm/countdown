import CopyClipBoardButton from '../../../Buttons/CopyClipBoardButton'
import FullScreenButton from '../../../Buttons/FullScreenButton'
import TrashButton from '../../../Buttons/TrashButton'
import { DurationObject } from '../../../services/DateAndTime/interfaces'
import { addLeftZero } from '../../../services/numberNormalizer'
import CardNumber from './CardNumber'

interface DateItemProps {
  title: string
  dateText?: string
  duration: DurationObject
  isDisabled?: boolean
  onDelete?: () => void
  shareUrl?: string
  onFullScreen?: () => void
}

export const DateItem = (props: DateItemProps) => {
  const {
    title, dateText, duration, isDisabled = false, onDelete,
    shareUrl, onFullScreen
  } = props

  const className = isDisabled
    ? `bg-neutral-200`
    : ''

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
        onDelete || shareUrl || onFullScreen ? (
          <div
            className='absolute top-3 right-4'
          >
            {
              onFullScreen ? (
                <FullScreenButton
                  onClick={onFullScreen}
                  size='size-5'
                />
              ) : null
            }
            {
              shareUrl ? (
                <CopyClipBoardButton
                  textToCopy={shareUrl}
                  title='Copiar enlace para compartir'
                  size='size-5'
                />
              ) : null
            }
            {
              onDelete ? (
                <TrashButton
                  confirmTitle={`Está seguro de que desea eliminar el temporizador:\n\n${title}\n${dateText}\n`}
                  onClick={onDelete}
                  size='size-5'
                />
              ) : null
            }
          </div>
        ) : null
      }
    </div>
  )
}
