import { useReducer } from "react"

type CounterState = {
    count: number
}


type UpdateAction = {
    type: 'increament' | 'decreament'
    payload: number
}

type ResetAction = {
    type: 'reset'
}


//decremenated union 
type CounterAction = UpdateAction | ResetAction

const initialState = {
    count: 0
}

const reducer = (state: CounterState, action: CounterAction) => {
    switch (action.type) {
        case "increament":
            return { count: state.count + action.payload }
        case "decreament":
            return { count: state.count - action.payload }
        case "reset":
            return initialState
        default:
            return state
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <button onClick={() => dispatch({ type: "increament", payload: 5 })}>+</button>
            <button onClick={() => dispatch({ type: "decreament", payload: 5 })}>-</button>
            <button onClick={() => dispatch({ type: "reset"})}>reset</button>
            <h2>{state.count}</h2>
        </div>
    )
}

export default Counter
