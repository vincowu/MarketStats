import axios from 'axios'
import './loginModal.scss';
import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import logo from '../../assets/logo/Market-Stats-logo.png';
import close from '../../assets/icons/close_black_24dp.svg'
import { Modal } from '@material-ui/core';
import { API_URL } from '../../util';

export class LoginModal extends Component {
    state = {
        formInfo: null,
        incorrect: false,
        token: null,
    }
    formChange = (event) => {
        this.setState({
            formInfo: { ...this.state.formInfo, [event.target.name]: event.target.value }
        })
    }
    formSubmit = (event) => {
        event.preventDefault();
        console.log(API_URL + "/user/login")
        console.log(this.state.formInfo.email)
        console.log(this.state.formInfo.password)
        axios.post(API_URL + "/user/login", {
            email: this.state.formInfo.email,
            password: this.state.formInfo.password
        })
            .then((req) => {
                if (Object.values(req.data)[0] === "User Does Not Exist" || Object.values(req.data)[0] === "Incorrect Password!") {
                    this.setState({
                        incorrect: true
                    })
                    return
                }
                else {
                    this.setState({
                        token: req.data.token
                    })
                    console.log('addedToken')
                }
            })
            .then(() => {
                if (!!this.state.token) {
                    sessionStorage.setItem("token", this.state.token)
                    this.props.history.push("profile")
                    console.log("yo")
                }
            })
    }


    render() {
        return (
            <Modal open={this.props.open} close={this.props.close}>
                <div className="login">
                    <div className="header">
                        <div className="header-logo-box">
                            <img className="logo" src={logo} />
                        </div>
                        <img className="close" src={close} onClick={this.props.closing} />
                    </div>
                    <h2 className="welcome-message">Welcome!</h2>
                    <form onSubmit={this.formSubmit} className="login-form">
                        {/* Email */}
                        <input type="email" name="email" onChange={this.formChange} placeholder="Your Email" className="login-form__text-box" />
                        {/* Incorrect Email or Password */}
                        {this.state.incorrect && (
                            <p className="error-login">Invalid Email or password</p>
                        )}
                        {/* Password */}
                        <input type="password" name="password" onChange={this.formChange} placeholder="Your Password" className="login-form__text-box" />
                        {/* Button Container */}
                        <div className="buttons-container">
                            <button className="form-buttons" type="submit">Log in</button>
                            <button className="form-buttons form-buttons--orange" type="button" onClick={this.props.signup}>
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>
        )
    }
}

export default withRouter(LoginModal)
