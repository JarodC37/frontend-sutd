import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

type useCounterNumberHookType = {
    count: number,
    increment: () => void,
    decrement: () => void
}
export const useCounterNumberHook = () : useCounterNumberHookType => {
    const {
        state: {count},
        increment,
        decrement
    } = useContext(CounterContext);

    return {count, increment, decrement};
}