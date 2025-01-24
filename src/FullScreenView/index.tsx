import { useEffect, useState } from 'react'

import { getSearchParams, getViewPath } from '../Router/utils'
import { DateContextItem } from '../DateContainer/context/DateContext'
import { useDateContext } from '../DateContainer/hooks/useDateContext'
import { DateAndTime } from '../services/DateAndTime'
import { TimeBetweenType } from '../services/DateAndTime/interfaces'
import FullScreenContainer from './FullScreenContainer'

interface StateValues {
  isSaveItem: boolean
  item: DateContextItem
}

const FullScreenView = () => {
  const { dates, removeDate, addDate } = useDateContext()

  const [state, setState] = useState<StateValues>()

  useEffect(
    () => {
      const search = getSearchParams()

      const params = new URLSearchParams(search.substring(1))
      const id = params.get('id')

      // Check Date exists in current storage
      if (id) {
        const date = dates.find(elem => {
          return elem.id === id
        })

        if (date) {
          setState({
            isSaveItem: true,
            item: { ...date }
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
      const viewPath = getViewPath({
        date, timezone, title, type,
        id: id || ''
      })

      setState({
        isSaveItem: false,
        item: {
          title, type, viewPath,
          id: id || '',
          date: dateTime
        }
      })
    }, [dates]
  )

  return (
    <div>
      {
        state ? (
          <FullScreenContainer
            dateItem={state.item}
            isSaveItem={state.isSaveItem}
            onDelete={removeDate}
            onSave={addDate}
          />
        ) : null
      }
    </div>
  )
}

export default FullScreenView
