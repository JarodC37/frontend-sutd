import { ChangeEvent, useContext } from "react";
import { CounterContext } from "../context/CounterContext";

type useCounterContextType = {
    message: string,
    handlePayload: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const useCounterMessageHook = () : useCounterContextType => {
    const {
        state: {message},
        handlePayload
    } = useContext(CounterContext);

    return {message, handlePayload}
}