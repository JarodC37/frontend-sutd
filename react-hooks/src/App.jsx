import { useState, useEffect, useMemo, useCallback } from "react";
import Fibonacci from "./components/Fibonacci";
import UseReducerExample from "./components/UseReducerExample";
// const fib = (n) => {
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// };


function App() {
  const [userNumber, setUserNumber] = useState("");
  const [randomInput, setRandomInput] = useState("");

  const fib = useCallback((n) => {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }, []);

  // still gets recomputed everytime this App is rendered
  const fibNumber = useMemo(() => fib(userNumber), [userNumber, fib]);

  return(
    <main className="App">
      <Fibonacci userNumber={userNumber} setUserNumber={setUserNumber} />

      <label>Random Input: </label>
      <input
        type="number"
        value={randomInput}
        placeholder="Random Input"
        onChange={e => setRandomInput(e.target.value)}
      />
      <p>{randomInput}</p>
      <br></br>
      <UseReducerExample />
    </main>
  )
}

export default App;
