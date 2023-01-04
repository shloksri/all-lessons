import React, { useState } from "react";

const HooksCounterSimple = () => {
  const [count, setCount] = useState(0);

  const incrementBy1 = () => {
    setCount((prevCount) => prevCount + 1);
  };
  // In Functional Components, it doesn't matter whether we use arrow functions or function keyword, we can use them in the same way.
  function decrementBy1() {
    setCount((prevCount) => prevCount - 1);
  }

  const improperIncrement = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  const properIncrement = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };
  const incrementBy3 = () => {
    setCount(count + 3);
  };
  const decrementBy3 = () => {
    setCount(count - 3);
  };

  return (
    <div>
      <h3> Simple Hooks Counter </h3>

      <div>
        Count : {count} &nbsp; <button onClick={() => setCount(0)}>Reset</button>
        <hr />
        <button onClick={incrementBy1}> + 1</button>
        <button onClick={decrementBy1}> - 1</button>
        <br />
        <button onClick={incrementBy3}>+ 3</button>
        <button onClick={decrementBy3}>- 3</button>
        <br />
        <h4>
          The below button calls methods improperIncrement, where we call setCount(count + 1) 3
          times.
        </h4>
        <h4>But this will not increase the counter to +3. Instead it will go only to +1</h4>
        <button onClick={improperIncrement}>Improper Increment</button>
        <h4>
          To fix this, use setCount(prevCount =&gt; prevCount + 1). Check below button which calls
          properIncrement()
        </h4>
        <button onClick={properIncrement}>Proper Increment</button>
      </div>
    </div>
  );
};

export default HooksCounterSimple;
