import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Custom Components
import { Login } from "./components/pages/Login";
import { Landing } from "./components/pages/Landing";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
