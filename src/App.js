import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import NewAccont from "./components/NewAccout";
import Disqualification from "./components/Disqualification";
function App() {
  return (
    <div className="App">
      <Home />
      <NewAccont />
      <Disqualification />
    </div>
  );
}

export default App;
