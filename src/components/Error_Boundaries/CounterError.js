import { useState } from "react";
import { useErrorHandler } from "react-error-boundary";

const CounterError = () => {
  const [count, setCount] = useState(0);
  const errorHandler = useErrorHandler();

  const handleClick = () => {
    try {
      if (count === 5) {
        throw new Error("limit of count exceeded");
      } else {
        setCount((c) => c + 1);
      }
    } catch (error) {
      errorHandler(error);
    }
  };
  return (
    <div>
      <button onClick={handleClick}> Count : {count}</button>
    </div>
  );
};

export default CounterError;
