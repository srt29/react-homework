import Weather from "./Weather";
import axios from "axios";

import './App.css';

export default function App() {
  return (
    <div className="App">
     <h1>Weather App</h1>
     <Weather />
     <p>
      <a href="https://github.com/srt29/react-homework">Open-source code</a> by <a href="https://github.com/srt29">Sian Thumbadoo</a>
     </p>
    </div>
  );
}


