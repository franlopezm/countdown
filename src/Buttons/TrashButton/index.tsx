import { IconSize } from "../../Icons/interfaces"
import TrashIcon from "../../Icons/TrashIcon"
import IconButton from "../IconButton"

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
      icon={<TrashIcon size={size} />}
      title="Eliminar"
    />
  )
}

export default TrashButton
