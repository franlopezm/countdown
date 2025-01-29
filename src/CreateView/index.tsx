import { FormEvent, useCallback, useState } from 'react'

import { routerUtils } from '../Router'
import { DateAndTime } from '../services/DateAndTime'
import { Button } from '../Buttons/Button'
import { SelectTimezone, TimezoneOption } from '../Form/SelectTimezone'
import { Label } from '../Form/Label'
import { Input } from '../Form/Input'
import { useDateContext } from '../DateContainer/hooks/useDateContext'
import CreateDateTimer from './CreateDateTimer'

const CreateView = () => {
  const [date, setDate] = useState<DateAndTime>(new DateAndTime())
  const [title, setTitle] = useState('')

  const { addDate } = useDateContext()

  const onSetDate = useCallback(
    (params: { date?: string, timezone?: string, time?: string }) => {
      const { date, timezone, time } = params
      if (!date && !timezone && !time) return

      setDate((oldDate) => {
        const d = date || oldDate.toISODate
        const t = time || oldDate.toISOTime

        const newDate = new DateAndTime(
          `${d}T${t}`,
          timezone || oldDate.zone
        )

        return newDate
      })
    }, []
  )

  const onTitle = useCallback(
    (value: string) => {
      setTitle(value)
    }, []
  )

  const onDate = useCallback(
    (value: string) => {
      onSetDate({ date: value })
    }, [onSetDate]
  )

  const onTime = useCallback(
    (value: string) => {
      onSetDate({ time: value })
    }, [onSetDate]
  )

  const onTimeZone = useCallback(
    (timezone: TimezoneOption) => {
      onSetDate({ timezone: timezone.value })
    }, [onSetDate]
  )

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const cDate = new DateAndTime()
    const isOlder = DateAndTime.isOlder(cDate, date)

    addDate({
      title, date,
      type: isOlder ? 'since' : 'until'
    })

    routerUtils.goTo('/')
  }

  return (
    <div>
      <form
        onSubmit={onSubmit}
        className='w-full md:w-max'
      >
        <h2
          className='mb-2 md:mb-5 text-xl md:text-2xl text-slate-600 font-semibold'
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
          className='flex justify-between flex-wrap'
        >
          <div
            className='w-full md:w-56'
          >
            <Label
              isRequired
              htmlFor='date'
            >
              Selecciona la Fecha:
            </Label>
            <Input
              isRequired
              id='date'
              value={date.toISODate}
              onChange={onDate}
              type='date'
            />
          </div>

          <div
            className='w-full md:w-44'
          >
            <Label
              isRequired
              htmlFor='time'
            >
              Selecciona la Hora:
            </Label>
            <Input
              isRequired
              id='time'
              value={date.toISOTime}
              onChange={onTime}
              type='time'
            />
          </div>
        </div>

        <div>
          <SelectTimezone
            id='select-timezone'
            value={date.zone}
            onChange={onTimeZone}
          />
        </div>

        <div
          className='mt-0 md:mt-1'
        >
          <Label>
            Vista previa
          </Label>
          <CreateDateTimer
            date={date}
            title={title}
          />
        </div>

        <div
          className='mt-7 md:mt-10 flex justify-end'
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
