import React from "react";
import Hero from "./Hero";
// import ErrorBoundary from "./ErrorBoundary";
import { ErrorBoundary } from "react-error-boundary";
import { FallBackMessage, FallBackCounter } from "./FallBack";
import CounterError from "./CounterError";

const AppError = () => {
  const errorHandlerFunction = (error, info) => {
    console.log("error: ", error);
    console.log("info: ", info);
  };
  return (
    <div>
      <ErrorBoundary FallbackComponent={FallBackMessage} onError={errorHandlerFunction}>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={FallBackMessage} onError={errorHandlerFunction}>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={FallBackMessage} onError={errorHandlerFunction}>
        <Hero heroName="Joker" />
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={FallBackCounter} onError={errorHandlerFunction}>
        <CounterError />
      </ErrorBoundary>
    </div>
  );
};

export default AppError;
