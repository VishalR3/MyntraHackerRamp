import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/style.css";
import "./App.css"
import Homepage from "./routes/Homepage";
import Login from "./routes/Login";
import Register from "./routes/Register";
import DiceGame from "./routes/DiceGame";
import Gamify from "./routes/Gamify";
import Recycle from "./routes/Recycle";
import { useState, useEffect } from "react";
import CoinGame from "./routes/CoinGame";

function App() {
  const [AuthenticatedUser, setAuthenticatedUser] = useState({});

  useEffect(() => {
    const user = window.localStorage.getItem("userData");
    setAuthenticatedUser(JSON.parse(user));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("userData", JSON.stringify(AuthenticatedUser));
  });

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/dice">
            <DiceGame />
          </Route>
          <Route path="/coin">
            <CoinGame />
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
            <Gamify />
          </Route>
          <Route>
            <Recycle />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
