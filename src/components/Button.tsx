import React from "react"

type ButtonProps = {
    // handleChange: (event: React.MouseEvent<HTMLButtonElement>) => void
    handleChange: (id: number) => void
}
const Button = (props: ButtonProps) => {
    return (
        <button onClick={() => props.handleChange(1)}>
            Click me
        </button>
    )
}

export default Button
