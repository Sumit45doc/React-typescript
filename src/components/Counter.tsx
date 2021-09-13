import { useReducer } from "react"

type CounterState = {
    count: number
}

type CounterAction = {
    type: 'increament' | 'decreament'
    payload: number
}

const initialState = {
    count: 0
}


const reducer = (state: CounterState, action: CounterAction) => {
    switch (action.type) {
        case "increament":
            return { count: state.count + action.payload }
        case "decreament":
            return { count: state.count - action.payload }
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
            <h2>{state.count}</h2>
        </div>
    )
}

export default Counter
