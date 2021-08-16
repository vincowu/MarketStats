import { BrowserRouter, Link, Route, Switch } from "react-router-dom"
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import HighlightedStock from "./pages/HighlightedStock/HighlightedStock";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/:stockInfo">
          <HighlightedStock />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
