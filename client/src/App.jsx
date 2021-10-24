import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Coin from "./routes/Coin";
import Dice from "./routes/Dice";

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
          <Route path="/">Homepage</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
