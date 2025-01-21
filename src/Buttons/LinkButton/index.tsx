import { RouteLink } from '../../Router'
import { Button, ButtonProps } from '../Button'

interface LinkButtonProps extends Omit<ButtonProps, 'onClick' | 'type'> {
  to: string
}

const LinkButton = (props: LinkButtonProps) => {
  const { to, title, size, isDisabled, className } = props

  return (
    <RouteLink
      to={to}
    >
      <Button
        title={title}
        size={size}
        isDisabled={isDisabled}
        className={className}
        type='btn-link'
      />
    </RouteLink>
  )
}

export default LinkButton
