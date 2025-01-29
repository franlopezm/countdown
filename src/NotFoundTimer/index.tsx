import { ROUTES } from '../config/constants'
import LinkButton from '../Buttons/LinkButton'

interface NotFoundTimerProps {
  text: string
}

export const NotFoundTimer = (props: NotFoundTimerProps) => {
  const { text } = props

  return (
    <div
      className='w-full mt-8 md:mt-16 text-center'
    >
      <p
        className='mb-6 md:mb-8 text-base md:text-xl text-slate-700'
      >
        {text}
      </p>

      <LinkButton
        title='Añadir temporizador'
        to={ROUTES.new}
      />
    </ div>
  )
}
