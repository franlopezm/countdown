import { useCallback, useState } from "react"

import { IconSize } from "../../Icons/interfaces"
import ClipboardIcon from "../../Icons/ClipboardIcon"
import IconButton from "../IconButton"

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
        icon={<ClipboardIcon size={size} />}
        title={title || 'Copiar'}
      />
      {
        isCopied ? (
          <div
            className="absolute right-1/2 translate-x-1/2 -top-10 px-2 py-0.5 rounded-md border-2 border-sky-700 shadow-lg bg-neutral-50 text-xs text-slate-700 before-arrow-bottom-center"
          >
            Copiado
          </div>
        ) : null
      }
    </div>
  )
}

export default CopyClipBoardButton
