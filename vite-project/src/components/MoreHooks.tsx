import { useMemo, useRef, ChangeEvent } from "react";

type fibFunc = (n: number) => number;

// an expensive calculation
const fib: fibFunc = (n) => {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
};

const someNumber = 15;

const MoreHooks = () => {
    const fibResult = useMemo(() => fib(someNumber), [someNumber]);

    //
    const inputRef = useRef<HTMLInputElement>(null);

    console.log(
        "~ file: Tutorial.tsx ~ Tutorial ~ inputRef",
        inputRef?.current?.value
    );
    const handleInputChange = (e: ChangeEvent) => {
        console.log(inputRef?.current?.value);
    };

    return (
        <>
            <h3>{fibResult}</h3>
            <input ref={inputRef} type="text" onChange={handleInputChange} />
        </>
    )
};

export default MoreHooks;