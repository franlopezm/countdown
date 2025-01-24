import { IconSize, IconWrapper, TrashIcon } from '../../Icons'
import IconButton from '../IconButton'

interface TrashButtonProps {
  onClick: () => void
  confirmTitle?: string
  size?: IconSize
}

const TrashButton = (props: TrashButtonProps) => {
  const { onClick, confirmTitle, size } = props

  const onDelete = () => {
    const isOk = confirmTitle
      ? confirm(confirmTitle)
      : true

    if (isOk) onClick()
  }

  return (
    <IconButton
      onClick={onDelete}
      iconClassNames="hover:text-red-800"
      icon={
        <IconWrapper size={size}>
          <TrashIcon />
        </IconWrapper>
      }
      title="Eliminar"
    />
  )
}

export default TrashButton
