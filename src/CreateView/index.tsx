import { FormEvent, useCallback, useState } from 'react'

import { routerUtils } from '../Router'
import { DateAndTime } from '../services/DateAndTime'
import { TimeBetweenType } from '../services/DateAndTime/interfaces'
import { Button } from '../Buttons/Button'
import { SelectTimezone, TimezoneOption } from '../Form/SelectTimezone'
import { Label } from '../Form/Label'
import { Input } from '../Form/Input'
import { useDateContext } from '../DateContainer/hooks/useDateContext'
import CreateDateTimer from './CreateDateTimer'

const CreateView = () => {
  const [date, setDate] = useState<DateAndTime>(new DateAndTime())
  const [title, setTitle] = useState('')
  const [type, setType] = useState<TimeBetweenType>('since')

  const { addDate } = useDateContext()

  const onSetDate = useCallback(
    (date?: string, timezone?: string) => {
      const cDate = new DateAndTime()

      setDate((oldDate) => {
        const newDate = new DateAndTime(
          date || oldDate.isoDate,
          timezone || oldDate.zone
        )

        const isOlder = DateAndTime.isOlder(cDate, newDate)
        setType(isOlder ? 'since' : 'until')

        return newDate
      })
    }, []
  )

  const onTitle = useCallback(
    (value: string) => {
      setTitle(value)
    }, []
  )

  const onDateTime = useCallback(
    (value: string) => {
      onSetDate(value)
    }, [onSetDate]
  )

  const onTimeZone = useCallback(
    (timezone: TimezoneOption) => {
      onSetDate('', timezone.value)
    }, [onSetDate]
  )

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    addDate({ title, date, type })

    routerUtils.goTo('/')
  }

  return (
    <div>
      <form
        onSubmit={onSubmit}
        className='w-max'
      >
        <h2
          className='mb-5 text-2xl text-slate-600 font-semibold'
        >
          Crear Temporizador
        </h2>

        <div>
          <Label
            htmlFor='title'
          >
            Título del temporizador:
          </Label>
          <Input
            id='title'
            value={title}
            onChange={onTitle}
            placeholder='Escribe aquí el título del temporizador...'
          />
        </div>
        <div
          className='flex'
        >
          <div
            className='w-1/2'
          >
            <Label
              isRequired
              htmlFor='datetime'
            >
              Fecha y hora:
            </Label>
            <Input
              isRequired
              id='datetime'
              className='w-56'
              value={date.isoDate}
              onChange={onDateTime}
              type='datetime-local'
            />
          </div>

          <div
            className='w-1/2'
          >
            <SelectTimezone
              className='w-60'
              id='select-timezone'
              value={date.zone}
              onChange={onTimeZone}
            />
          </div>
        </div>

        <div
          className='mt-1'
        >
          <Label>
            Vista previa
          </Label>
          <CreateDateTimer
            date={date}
            title={title}
            type={type}
          />
        </div>

        <div
          className='mt-10 flex justify-end'
        >
          <Button
            title='Guardar temporizador'
            type='submit'
          />
        </div>
      </form>
    </div>
  )
}

export default CreateView
