import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Coin from "./routes/Coin";
import Dice from "./routes/Dice";
import Homepage from "./routes/Homepage"
import Login from "./routes/Login"
import Register from "./routes/Register"
import {useState} from 'react';

function App() {

  const [AuthenticatedUser, setAuthenticatedUser] = useState({});

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
            <Homepage AuthenticatedUser={AuthenticatedUser} setAuthenticatedUser={setAuthenticatedUser}/>
          </Route>
          <Route path="/login">
            <Login setAuthenticatedUser={setAuthenticatedUser}/>
          </Route>
          <Route path="/register">
            <Register setAuthenticatedUser={setAuthenticatedUser}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
