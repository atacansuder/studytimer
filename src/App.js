import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Timer from "./components/Timer";
import { useState } from "react";
import Tasks from "./components/Tasks";

function App() {
  // Not sure if keeping this state in the App file is a good idea
  // TODO: think more about the architecture before implementing this
  const [pomodorosPassed, setPomodorosPassed] = useState(0);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header />
      <div className="main_container">
        <Timer setPomodoros={setPomodorosPassed} />
        <Tasks />
      </div>
    </div>
  );
}

export default App;
