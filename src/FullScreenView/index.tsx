import { useEffect, useState } from 'react'

import { DateContextItem } from '../DateContainer/context/DateContext'
import { useDateContext } from '../DateContainer/hooks/useDateContext'
import { DateAndTime } from '../services/DateAndTime'
import { TimeBetweenType } from '../services/DateAndTime/interfaces'
import FullScreenContainer from './FullScreenContainer'

const FullScreenView = () => {
  const { dates, removeDate } = useDateContext()

  const [state, setState] = useState<DateContextItem>()

  useEffect(
    () => {
      const search = window.location.search

      const params = new URLSearchParams(search.substring(1))
      const id = params.get('id')

      // Check Date exists in current storage
      if (id) {
        const date = dates.find(elem => {
          return elem.id === id
        })

        if (date) {
          setState({
            ...date
          })
          return
        }
      }

      // Date not exists in current storage
      const date = params.get('date') || ''
      const timezone = params.get('timezone') || ''
      const title = params.get('title') || ''
      const type = params.get('type') as TimeBetweenType || 'since'

      const dateTime = new DateAndTime(date, timezone)
      const viewPath = `${window.location.pathname}${search}`

      setState({
        title, type, viewPath,
        id: '',
        date: dateTime,
      })
    }, [dates]
  )

  return (
    <div>
      {
        state ? (
          <FullScreenContainer
            dateItem={state}
            onDelete={removeDate}
          />
        ) : null
      }
    </div>
  )
}

export default FullScreenView
