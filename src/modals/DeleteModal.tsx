import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

import { IconWrapper, XMark } from '../Icons'
import { Button } from '../Buttons/Button'
import IconButton from '../Buttons/IconButton'

interface DeleteModalProps {
  title: string
  children?: ReactNode
  open: boolean
  onClose: () => void
  onDelete: () => void
}

const DeleteModal = (props: DeleteModalProps) => {
  const { title, children, open = false, onClose, onDelete } = props

  if (!open) return null

  return createPortal(
    <div
      className='absolute top-0 left-0 w-full h-full bg-black/50'
      onClick={() => onClose()}
    >
      <div
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-sm shadow-md border p-5 pt-6 md:p-8 md:pt-9 bg-white'
      >
        <div
          className='absolute top-1 right-1'
        >
          <IconButton
            icon={
              <IconWrapper size='size-4 md:size-5'>
                <XMark />
              </IconWrapper>
            }
            onClick={() => onClose()}
            title='Cancelar'
          />
        </div>

        <div
          className='flex flex-wrap flex-col justify-between min-h-40 min-w-72 md:min-w-80'
        >
          <div>
            <p
              className='text-sm md:text-base font-medium'
            >
              {title}
            </p>
            {
              children ? (
                <div
                  className='text-sm mt-4 whitespace-break-spaces'
                >
                  {children}
                </div>
              ) : null
            }
          </div>
          <div
            className='flex justify-between mt-8 md:mt-12'
          >
            <Button
              title='Cancelar'
              color='btn-secondary'
              onClick={() => onClose()}
            />

            <Button
              title='Eliminar'
              color='btn-danger'
              onClick={() => onDelete()}
            />
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default DeleteModal
