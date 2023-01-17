import { useReducer, ReactNode, ChangeEvent } from "react";

const initState = {
    count: 0,
    message: ""
};

// or you can use enum or object with key: value
const enum REDUCER_ACTION_TYPE {
    INCREMENT,
    DECREMENT,
    NEW_INPUT
}

type ReducerAction = {
    type: REDUCER_ACTION_TYPE;
    payload?: string;
};

// reducer function recevies current state and action
// returns a new state based on the action
const reducer = (
    state: typeof initState,
    action: ReducerAction
): typeof initState => {
    // a large switch statement
    switch (action.type) {
        case REDUCER_ACTION_TYPE.INCREMENT:
            return { ...state, count: state.count + 1 };
        case REDUCER_ACTION_TYPE.DECREMENT:
            return { ...state, count: state.count - 1 };
        case REDUCER_ACTION_TYPE.NEW_INPUT:
            return { ...state, message: action.payload ?? "" }
        default:
            throw new Error();
    }
};

type ChildrenType = {
    // children is a function that accepts one input which is a number, and returns a react node
    children: (num: number) => ReactNode;
};


const CounterUseReducer = ({ children }: ChildrenType) => {
    const [state, dispatch] = useReducer(reducer, initState);
    const increment = () => {
        dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT });
    };
    const decrement = () => {
        dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT });
    };
    const handlePayload = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: REDUCER_ACTION_TYPE.NEW_INPUT, payload:
                e.target.value
        });
    };
    return (
        //rendering an element defined by the parent
        <>
            <h1>{children(state.count)}</h1>
            <div>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>

                <br />
                <input type="text" onChange={handlePayload} />
                <h3>{state.message}</h3>
            </div>
        </>
    );
};

export default CounterUseReducer;
