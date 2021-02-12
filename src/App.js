import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import NewAccont from "./components/NewAccout";
import Disqualification from "./components/Disqualification";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import QualificationCheck from "./components/QualificationCheck";

function App() {
  return (
    <div className="App">
      {" "}
      <Router>
        {" "}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/qualified" component={NewAccont} />
          <Route exact path="/disqualified" component={Disqualification} />
          <Route render={() => <p> sorry this page doesnt exist</p>} />{" "}
        </Switch>{" "}
      </Router>
      <QualificationCheck />
    </div>
  );
}

export default App;
