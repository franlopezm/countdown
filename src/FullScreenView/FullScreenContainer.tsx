import { useCallback } from 'react'

import { DateContextItem, DateItemCreate } from '../DateContainer/context/DateContext'
import { DateAndTime } from '../services/DateAndTime'
import { DateItem } from '../DateContainer/components/DateItem'
import { Button } from '../Buttons/Button'
import { BookmarkIcon, ExclamationCircleIcon, IconWrapper } from '../Icons'
import useTimer from '../shared/hooks/useTimer'

interface FullScreenContainerProps {
  dateItem: DateContextItem
  isSaveItem: boolean
  onDelete: (id: string) => void
  onSave: (item: DateItemCreate) => void
}

const FullScreenContainer = (props: FullScreenContainerProps) => {
  const { dateItem, isSaveItem, onDelete, onSave } = props
  const { date, id, title, type, viewPath } = dateItem

  const [currentDate] = useTimer()

  const onDeleteDate = useCallback(
    () => {
      onDelete(id)
    }, [id, onDelete]
  )

  const onSaveDate = useCallback(
    () => {
      onSave({
        date: dateItem.date,
        title: dateItem.title,
        type: dateItem.type,
        id: dateItem.id
      })
    }, [dateItem, onSave]
  )

  const durationInfo = DateAndTime.durationFromDate(currentDate, date)

  return (
    <div
      className='mx-auto md:group/datelarge max-w-max'
    >
      <DateItem
        isDisabled={type !== durationInfo.type}
        dateText={date.format()}
        title={title}
        type={type}
        duration={durationInfo.duration}
        onDelete={isSaveItem ? onDeleteDate : undefined}
        sharePath={viewPath}
      />

      <div
        className='mt-6 md:mt-8 flex justify-center items-center text-xs md:text-base text-slate-700'
      >
        {
          isSaveItem ? (
            <IconWrapper
              size='size-5 md:size-6'
              className='mr-1.5 md:mr-2 text-green-700'
            >
              <BookmarkIcon />
            </IconWrapper>
          ) : (
            <IconWrapper
              size='size-5 md:size-6'
              className='mr-1.5 md:mr-2 text-red-700'
            >
              <ExclamationCircleIcon />
            </IconWrapper>
          )
        }

        <span>
          {
            isSaveItem
              ? 'Ya tienes este temporizador en tu lista de favoritos.'
              : 'Este temporizador no se encuentra en tu lista de favoritos.'
          }
        </span>
      </div>

      <div
        className='mt-6 md:mt-8 flex justify-end'
      >
        {
          !isSaveItem ? (
            <Button
              title='Guardar temporizador'
              onClick={onSaveDate}
              isDisabled={isSaveItem}
            />
          ) : null
        }
      </div>
    </div>
  )
}

export default FullScreenContainer
