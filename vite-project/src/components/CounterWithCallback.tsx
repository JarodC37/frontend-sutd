import { ReactNode } from "react";

type CounterProps = {
    increment: () => void;
    decrement: () => void;
    children: ReactNode;
};

const CounterWithCallback = ({ increment, decrement, children }: CounterProps) => {
    return (
        <>
            <h1>{children}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    );
};

export default CounterWithCallback;