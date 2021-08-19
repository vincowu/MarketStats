import { BrowserRouter, Link, Route, Switch } from "react-router-dom"
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import HighlightedStock from "./pages/HighlightedStock/HighlightedStock";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/search/:stock" exact
          render={(routerParams) => {
            return (
              <HighlightedStock
                {...routerParams}
              />)
          }}>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/profile" exact>
          <Profile />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
