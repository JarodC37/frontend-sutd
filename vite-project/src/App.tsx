import Counter from "./components/Counter";
import CounterWithCallback from "./components/CounterWithCallback";
import Heading from "./components/Heading";
import Section from "./components/Section";
import { useState } from "react";
import List from "./components/List";
import MoreHooks from "./components/MoreHooks";
import CounterUseReducer from "./components/CounterUseReducer";
import { CounterProvider, initState } from "./context/CounterContext";
import CounterUseContext from "./components/CounterUseContext";


function App() {
  const [count, setCount] = useState(100);
  const increment = () => {
    setCount((prev: number): number => prev + 1);
  };
  const decrement = () => {
    setCount((prev: number): number => prev - 1);
  };
  return (
    <>
      {/* <Heading title={"Happy new year"} subtitle={"2023"} />
      <Section>
        Hello world
      </Section>
      <Counter />
      <CounterWithCallback increment={increment} decrement={decrement}>
        Alternate count value is {count}
      </CounterWithCallback>
      <List
        items={["Bird", "Cat", "Dog", "Rat"]}
        render={(item: string) => <span className="gold">{item}</span>}
      ></List>
      
      <MoreHooks></MoreHooks> */}
      
      <CounterProvider count={initState.count} message={initState.message}>
        <CounterUseContext>
          {(num: number) => <>Current count with useContext: {num}</>}
        </CounterUseContext>
      </CounterProvider>
      <CounterUseReducer>
        {(num: number) => <>Current count with useReducer: {num}</>}
      </CounterUseReducer>
      
    </>
  )
}

export default App
