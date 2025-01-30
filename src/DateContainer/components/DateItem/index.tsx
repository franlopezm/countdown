import { DurationObject, TimeBetweenType } from '../../../services/DateAndTime/interfaces'
import { addLeftZero } from '../../../services/numberNormalizer'
import CopyClipBoardButton from '../../../Buttons/CopyClipBoardButton'
import FullScreenButton from '../../../Buttons/FullScreenButton'
import TrashButton from '../../../Buttons/TrashButton'
import CardNumber from './CardNumber'
import { routerUtils } from '../../../Router'
// import MenuItem from './MenuItem'

interface DateItemProps {
  duration: DurationObject
  title?: string
  type?: TimeBetweenType
  dateText?: string
  fullScreenPath?: string
  isDisabled?: boolean
  onDelete?: () => void
  sharePath?: string
  classContainer?: string
}

const getTitle = ({ title, type }: { title?: string, type?: TimeBetweenType }): string => {
  if (title) return title

  return type === 'since'
    ? 'Tiempo desde la fecha:'
    : 'Tiempo hasta la fecha:'
}

export const DateItem = (props: DateItemProps) => {
  const {
    title, dateText, duration, isDisabled = false, onDelete,
    sharePath, type, fullScreenPath, classContainer = ''
  } = props

  const className = isDisabled
    ? 'bg-neutral-200'
    : ''

  const titleText = getTitle({ title, type })


  return (
    <div
      className={`py-3 px-4 md:py-5 md-px-7 max-w-max shadow-md border-2 rounded relative ${className} group-[]/datelarge:pt-5 group-[]/datelarge:px-8 group-[]/datelarge:shadow-lg ${classContainer}`}
    >
      <p className="font-bold text-xs md:text-sm text-sky-700 group-[]/datelarge:text-base">
        {titleText}
      </p>
      {
        dateText
          ? (
            <p className='flex items-center text-sm md:text-base font-normal text-slate-600 mt-0.5 md:mt-1 group-[]/datelarge:mt-2 group-[]/datelarge:text-lg'>
              {dateText}
            </p>
          ) : null
      }

      <div className='flex justify-between content-between mt-1 md:mt-2 group-[]/datelarge:mt-4'>
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
        onDelete || sharePath || fullScreenPath ? (
          <div
            className='absolute top-2 md:top-3 right-3 md:right-4 group-[]/datelarge:top-4 group-[]/datelarge:right-7'
          >
            {
              fullScreenPath ? (
                <FullScreenButton
                  path={fullScreenPath}
                  size='size-4 md:size-5'
                />
              ) : null
            }
            {
              sharePath ? (
                <CopyClipBoardButton
                  textToCopy={routerUtils.getURL(sharePath)}
                  title='Copiar enlace para compartir'
                  size='size-4 md:size-5'
                />
              ) : null
            }
            {
              onDelete ? (
                <TrashButton
                  onClick={onDelete}
                  modalTitle='Está seguro de que desea eliminar el temporizador:'
                  modalContent={`${title}\n${dateText}`}
                  size='size-4 md:size-5'
                />
              ) : null
            }

            {/* <MenuItem /> */}
          </div>
        ) : null
      }

      {
        isDisabled ? (
          <div
            className='absolute bottom-3 md:bottom-4 -right-1.5 -rotate-45 rounded-md px-1 md:px-1.5 py-0.5 border-2 border-neutral-500 shadow-lg bg-neutral-50 text-xxs md:text-xs text-slate-800'
          >
            Finalizado
          </div>
        ) : null
      }
    </div>
  )
}
