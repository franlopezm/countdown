import { useDateContext } from '../hooks/useDateContext'
import { DateAndTime } from '../../services/DateAndTime'
import { DateItem } from './DateItem'
import { NotFoundTimer } from '../../NotFoundTimer'
import { useCallback } from 'react'
import { routerUtils } from '../../Router'

interface DateListProps {
  date: DateAndTime
}

export const DateList = (props: DateListProps) => {
  const { date } = props
  const { dates, dateSize, removeDate } = useDateContext()

  const onFullScreen = useCallback(
    (path: string) => {
      routerUtils.goTo(path)
    }, []
  )

  return (
    <div className='mt-8 flex flex-wrap justify-start'>
      {
        dateSize === 0 ? (
          <NotFoundTimer
            text='No se han encontrado temporizadores.'
          />
        ) : null
      }
      {
        dates.map(item => {
          const {
            date: itemDate, type: itemType, viewPath, id, title
          } = item

          const { duration, type } = DateAndTime.durationFromDate(date, itemDate)

          return (
            <DateItem
              key={id}
              title={title}
              type={itemType}
              dateText={itemDate.format()}
              duration={duration}
              isDisabled={itemType !== type}
              onDelete={() => removeDate(id)}
              onFullScreen={() => onFullScreen(viewPath)}
              shareUrl={routerUtils.getURL(viewPath)}
            />
          )
        })
      }
    </div>
  )
}
