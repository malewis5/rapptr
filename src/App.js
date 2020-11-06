import "./App.css";
import { Router, Route, Switch } from "react-router-dom";

// Custom Components
import { Login } from "./pages/Login";
import { Landing } from "./pages/Landing";

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
