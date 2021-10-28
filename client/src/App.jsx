import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/style.css";
import Coin from "./routes/Coin";
import Dice from "./routes/Dice";
import Homepage from "./routes/Homepage";
import Login from "./routes/Login";
import Register from "./routes/Register";
import DiceChoose from "./routes/DiceChoose";
import DiceGame from "./routes/DiceGame";

import Homepage from "./routes/Homepage"
import Login from "./routes/Login"
import Register from "./routes/Register"
import Gamify from "./routes/Gamify"
import {useState} from 'react';


function App() {
  const [AuthenticatedUser, setAuthenticatedUser] = useState({});

  return (
    <div className="App">
      <Router>
        <Switch>
          /* <Route path="/chooseDice">
            <DiceChoose />
          </Route> */
          <Route path="/dice">
            <DiceGame />
          </Route>
          <Route path="/coin">
            <Coin />
          </Route>
          <Route exact path="/">
            <Homepage
              AuthenticatedUser={AuthenticatedUser}
              setAuthenticatedUser={setAuthenticatedUser}
            />
          </Route>
          <Route path="/login">
            <Login setAuthenticatedUser={setAuthenticatedUser} />
          </Route>
          <Route path="/register">
            <Register setAuthenticatedUser={setAuthenticatedUser} />
          </Route>
          <Route path="/gamify">
            <Gamify/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
