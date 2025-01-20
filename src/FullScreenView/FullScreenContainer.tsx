import { useCallback } from 'react'

import useTimer from '../shared/hooks/useTimer'
import { DateContextItem } from '../DateContainer/context/DateContext'
import { DateAndTime } from '../services/DateAndTime'
import { DateItem } from '../DateContainer/components/DateItem'

interface FullScreenContainerProps {
  dateItem: DateContextItem
  onDelete: (id: string) => void
}

const FullScreenContainer = (props: FullScreenContainerProps) => {
  const { dateItem, onDelete } = props
  const { date, id, title, type, viewPath } = dateItem

  const [currentDate] = useTimer()

  const onDeleteDate = useCallback(
    () => {
      onDelete(id)
    }, [id, onDelete]
  )

  const durationInfo = DateAndTime.durationFromDate(currentDate, date)

  return (
    <div
      className=''
    >
      <DateItem
        isDisabled={type !== durationInfo.type}
        dateText={date.format()}
        title={title}
        type={type}
        duration={durationInfo.duration}
        onDelete={onDeleteDate}
        sharePath={viewPath}
      />
    </div>
  )
}

export default FullScreenContainer
