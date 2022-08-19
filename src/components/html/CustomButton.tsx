type CustomButtonProps = {
  variant: 'primary' | 'secondary'
} & React.ComponentProps<'button'>

function CustomButton({variant, children, ...rest}: CustomButtonProps) {
  return (
    <button className={`class-with-${variant}`} >{children}</button>
  )
}

export default CustomButton