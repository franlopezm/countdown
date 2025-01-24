import { useCallback } from 'react'

import { routerUtils } from '../../Router'
import { FullScreenIcon, IconWrapper, type IconSize } from '../../Icons'
import IconButton from '../IconButton'

interface FullScreenButtonProps {
  path: string
  size?: IconSize
}

const FullScreenButton = (props: FullScreenButtonProps) => {
  const { path, size } = props

  const onFullScreen = useCallback(
    () => {
      routerUtils.goTo(path)
    }, [path]
  )

  return (
    <IconButton
      onClick={onFullScreen}
      iconClassNames="hover:text-sky-700"
      icon={
        <IconWrapper size={size}>
          <FullScreenIcon />
        </IconWrapper>
      }
      title='Ver a pantalla completa'
    />
  )
}

export default FullScreenButton
