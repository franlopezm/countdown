import TrashIcon from "../../Icons/TrashIcon"

interface TrashButtonProps {
  onClick: () => void
  confirmTitle?: string
}

const TrashButton = (props: TrashButtonProps) => {
  const { onClick, confirmTitle } = props

  const onDelete = () => {
    const isOk = confirmTitle
      ? confirm(confirmTitle)
      : true

    if (isOk) onClick()
  }

  return (
    <button
      type='button'
      className='text-slate-600 hover:text-red-800'
      title='Eliminar'
      onClick={onDelete}
    >
      <TrashIcon
        size='size-5'
      />
    </button>
  )
}

export default TrashButton
