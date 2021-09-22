import React, { Component } from 'react';
import logo from '../../assets/logo/Market-Stats-logo.png';
import close from '../../assets/icons/close_black_24dp.svg'
import { Modal } from '@material-ui/core';
import { Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../util';

export class SignUpModal extends Component {
    state = {
        formInfo: null,
    }
    formChange = (event) => {
        this.setState({
            formInfo: { ...this.state.formInfo, [event.target.name]: event.target.value }
        })
    }
    formSubmit = (event) => {
        axios.post(API_URL + "/user/signup", {
            email: this.state.formInfo.email,
            password: this.state.formInfo.password
        })
            .then(this.props.redirect);
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
                    <h2 className="welcome-message">Welcome New Investors!</h2>
                    <form className="login-form">
                        {/* Email */}
                        <input type="email" name="email" onChange={this.formChange} placeholder="Your Email" className="login-form__text-box" />
                        {/* Password */}
                        <input type="password" name="password" onChange={this.formChange} placeholder="Your Password" className="login-form__text-box" />
                        {/* Button Container */}
                        <div className="buttons-container">
                            <button className="form-buttons form-buttons--orange" type="button" onClick={this.formSubmit}>
                                Create Account
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>
        )
    }
}

export default withRouter(SignUpModal)
