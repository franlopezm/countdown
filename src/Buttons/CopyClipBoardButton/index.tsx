import { useCallback, useState } from 'react'

import { IconWrapper, ClipboardIcon, type IconSize } from '../../Icons'
import IconButton from '../IconButton'

interface CopyClipBoardButtonProps {
  textToCopy: string
  size?: IconSize
  title?: string
}

const CopyClipBoardButton = (props: CopyClipBoardButtonProps) => {
  const { textToCopy, size, title } = props

  const [isCopied, setIsCopied] = useState(false)

  const onClick = useCallback(
    () => {
      if (navigator?.clipboard?.writeText) {
        navigator.clipboard.writeText(textToCopy.trim())
        setIsCopied(true)

        setTimeout(() => {
          setIsCopied(false)
        }, 1500)
      } else {
        console.warn('Browser not support copy to clipboard.')
      }
    }, [textToCopy]
  )

  return (
    <div
      className="relative inline"
    >
      <IconButton
        onClick={onClick}
        iconClassNames="hover:text-sky-700"
        icon={
          <IconWrapper size={size}>
            <ClipboardIcon />
          </IconWrapper>
        }
        title={title || 'Copiar'}
      />
      {
        isCopied ? (
          <div
            className="absolute right-1/2 translate-x-1/2 -top-8 md:-top-10 px-1.5 md:px-2 py-0.5 rounded-md border-2 border-sky-700 shadow-lg bg-neutral-50 text-xxs md:text-xs text-slate-700 before-arrow-bottom-center"
          >
            Copiado
          </div>
        ) : null
      }
    </div>
  )
}

export default CopyClipBoardButton
