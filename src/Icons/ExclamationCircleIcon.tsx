import { IconProps } from './interfaces'

const ExclamationCircleIcon = (props: IconProps) => {
  const { size = 'size-6', className } = props

  return (
    <div className={className}>
      <svg className={size} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
      </svg>
    </div>
  )
}

export default ExclamationCircleIcon
