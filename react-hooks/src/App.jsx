import { useState, useEffect, useMemo, useCallback } from "react";
import Fibonacci from "./components/Fibonacci";
import UseTransitionExample from "./components/UseTransitionExample";
import UseReducerExample from "./components/UseReducerExample";
import UseDeferredValueExample from "./components/UseDeferredValueExample";
import SearchBar from "./components/SearchBar";
import FormInput from "./components/FormInput";
import Video from "./components/Video";
import PreviousPrice from "./components/PreviousPrice";


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
      {/* <Fibonacci userNumber={userNumber} setUserNumber={setUserNumber} />

      <label>Random Input: </label>
      <input
        type="number"
        value={randomInput}
        placeholder="Random Input"
        onChange={e => setRandomInput(e.target.value)}
      />
      <p>{randomInput}</p>
      <br></br>
      <UseReducerExample /> */}
      {/* <UseTransitionExample /> */}
      {/* <UseDeferredValueExample /> */}
      {/* <SearchBar /> */}
      {/* <FormInput></FormInput> */}
      <PreviousPrice />
      <Video></Video>
    </main>
  )
}

export default App;
