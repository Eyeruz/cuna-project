import "./App.css";
import { connect } from "react-redux";
import Home from "./components/Home";
import NewAccont from "./components/NewAccount";
import Disqualification from "./components/Disqualification";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import QualificationCheck from "./components/QualificationCheck";

function App({ info }) {
  return (
    <div className="App">
      {" "}
      <Router>
        {" "}
        {/* make a redirect where if the login page is accessed with out user info it is redirected to the home page */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/qualified"
            render={(props) =>
              info ? <NewAccont {...props} /> : <Redirect to="/" />
            }
          />
          <Route
            exact
            path="/disqualified"
            render={(props) =>
              info ? <Disqualification {...props} /> : <Redirect to="/" />
            }
          />
          <Route
            exact
            path="/checking"
            render={(props) => (info ? <QualificationCheck /> : <Redirect />)}
          />
          <Route render={() => <p> sorry this page doesnt exist</p>} />{" "}
        </Switch>{" "}
      </Router>
    </div>
  );
}

// bring in mapstatetoprops and userinfo... for the if statem
const mapStateToProps = (state) => {
  return {
    userinfo: state.users.userInfo,
    info: state.users.info,
  };
};
export default connect(mapStateToProps)(App);
