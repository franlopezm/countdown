import { IconSize } from "../../Icons/interfaces"
import FullScreenIcon from "../../Icons/FullScreenIcon"
import IconButton from "../IconButton"

interface FullScreenButtonProps {
  onClick: () => void
  size?: IconSize
}

const FullScreenButton = (props: FullScreenButtonProps) => {
  const { onClick, size } = props

  return (
    <IconButton
      onClick={onClick}
      iconClassNames="hover:text-sky-700"
      icon={<FullScreenIcon size={size} />}
      title='Ver a pantalla completa'
    />
  )
}

export default FullScreenButton
