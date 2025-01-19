import LinkButton from '../Buttons/LinkButton'

interface NotFoundTimerProps {
  text: string
}

export const NotFoundTimer = (props: NotFoundTimerProps) => {
  const { text } = props

  return (
    <div
      className='w-full mt-16 text-center'
    >
      <p
        className='mb-8 text-xl text-slate-700'
      >
        {text}
      </p>

      <LinkButton
        title='Añadir temporizador'
        to='/new'
      />
    </ div>
  )
}
