import { useState, useCallback, MouseEvent, KeyboardEvent } from "react";

interface User {
    id: number;
    username: string;
}

const Counter = () => {
    const [count, setCount] = useState<number>(1);
    // defining state type with interface
    const [users, setUsers] = useState<User[] | null>(null);

    const increment = () => {
        setCount((prev) => prev + 1);
    };
    const decrement = () => {
        setCount((prev) => prev - 1);
    };

    // adding event to the callback in React 18 forces you to implicitly state the type of the event
    // you can just use e: any of course, but that's not neat
    const addTwo = useCallback(
        (e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => {
            setCount((prev) => prev + 2);
        }, 
        [] // doesn't have to be recreated after it is created the first time, else fill up the dependency array here
    );

    return (
        <>
            <h1>Count is {count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={addTwo}>Add Two</button>
        </>
    );
};

export default Counter;