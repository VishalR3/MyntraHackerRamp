import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Coin from "./routes/Coin";
import Dice from "./routes/Dice";
import Homepage from "./routes/Homepage"
import Login from "./routes/Login"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/dice">
            <Dice />
          </Route>
          <Route path="/coin">
            <Coin />
          </Route>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/Register">
            Register
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
