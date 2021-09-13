import React from "react"

type InputProps = {
    value: string,
    changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const Input = (props: InputProps) => {
    return (
        <div>
           <input value={props.value} onChange={(e) => props.changeHandler(e)} /> 
        </div>
    )
}

export default Input
