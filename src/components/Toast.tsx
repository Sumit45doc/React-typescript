type HorizontalPosition = 'left' | 'center' | 'right'
type VerticlePosition = 'top' | 'center' | 'bottom'

type ToastProps = {
    position: Exclude<`${HorizontalPosition}-${VerticlePosition}`, 'center-center'> | 'center';
}

function Toast(props: ToastProps) {
    return (
        <div>Toast</div>
    )
}

export default Toast