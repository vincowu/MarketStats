import axios from 'axios'
import './loginModal.scss';
import React, { Component } from 'react';
import logo from '../../assets/logo/Market-Stats-logo.png';
import close from '../../assets/icons/close_black_24dp.svg'
import { Modal } from '@material-ui/core';

export class LoginModal extends Component {
    state = {
        formInfo: null,
    }
    formChange = (event) => {
        this.setState({
            formInfo: { ...this.state.formInfo, [event.target.name]: event.target.value }
        })
        console.log(this.state.formInfo)
    }
    formSubmit = (event) => {
        event.preventDefault();
        console.log(event)
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
                    <form onSubmit={this.handleSubmit} className="login-form">
                        {/* Email */}
                        <input type="email" name="email" onChange={this.handleChange} placeholder="Your Email" className="login-form__text-box" />
                        {/* Password */}
                        <input type="password" name="password" onChange={this.handleChange} placeholder="Your Password" className="login-form__text-box" />
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

export default LoginModal
