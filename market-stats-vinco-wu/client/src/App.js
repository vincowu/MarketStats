import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom"
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import HighlightedStock from "./pages/HighlightedStock/HighlightedStock";
import About from "./pages/About/About";
import Profile from "./pages/Profile/Profile";
import LoginModal from "./components/LoginModal/LoginModal";
import SignUpModal from "./components/SignUpModal/SignUpModal";


class App extends React.Component {
  state = {
    loginModal: false,
    signupModal: false,
  }
  clickLogin = () => {
    this.setState({
      loginModal: true,
      signupModal: false
    })
  }
  clickSignup = () => {
    this.setState({
      loginModal: false,
      signupModal: true
    })
  }
  closeModals = () => {
    this.setState({
      loginModal: false,
      signupModal: false
    })
  }
  render() {
    return (
      <BrowserRouter>
        <Navigation login={this.clickLogin} />
        <Switch>
          <Route path="/" exact>
            <Home />
            {this.state.loginModal && (<LoginModal open={this.state.loginModal} closing={this.closeModals} signup={this.clickSignup} />)}
            {this.state.signupModal && (<SignUpModal open={this.state.signupModal}
              closing={this.closeModals} redirect={this.clickLogin} />)}
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
          <Route path="/profile" exact>
            <Profile />
          </Route>
        </Switch>
      </BrowserRouter >
    )
  }
}

export default App

