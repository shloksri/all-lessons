import "./App.css";
// import AppCounter from "./components/Counter/AppCounter";
import AppError from "./components/Error_Boundaries/AppError";
function App() {
  return (
    <div className="App">
      {/* <AppCounter /> */}
      <AppError />
    </div>
  );
}

export default App;
