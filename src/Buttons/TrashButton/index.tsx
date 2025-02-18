import { ReactNode, useCallback, useState } from 'react'

import { IconSize, IconWrapper, TrashIcon } from '../../Icons'
import DeleteModal from '../../modals/DeleteModal'
import IconButton from '../IconButton'

interface TrashButtonProps {
  onClick: () => void
  modalTitle: string
  modalContent?: ReactNode
  size?: IconSize
}

const TrashButton = (props: TrashButtonProps) => {
  const {
    onClick, modalTitle, modalContent, size,
  } = props

  const [openModal, setOpenModal] = useState(false)

  const onOpen = useCallback(
    () => {
      setOpenModal(value => !value)
    }, []
  )

  const onDelete = () => {
    onOpen()
    onClick()
  }

  return (
    <>
      <IconButton
        onClick={onOpen}
        iconClassNames="hover:text-red-800"
        icon={
          <IconWrapper size={size}>
            <TrashIcon />
          </IconWrapper>
        }
        title="Eliminar"
      />

      <DeleteModal
        title={modalTitle}
        children={modalContent}
        open={openModal}
        onClose={onOpen}
        onDelete={onDelete}
      />
    </>
  )
}

export default TrashButton
