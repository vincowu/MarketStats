import React, { Component } from 'react';
import logo from '../../assets/logo/Market-Stats-logo.png';
import close from '../../assets/icons/close_black_24dp.svg'
import { Modal } from '@material-ui/core';

export class SignUpModal extends Component {
    state = {
        formData: null,
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
                    <form onSubmit={this.handleSubmit} className="login-form">
                        {/* Email */}
                        <input type="email" name="email" onChange={this.handleChange} placeholder="Your Email" className="login-form__text-box" />
                        {/* Password */}
                        <input type="password" name="password" onChange={this.handleChange} placeholder="Your Password" className="login-form__text-box" />
                        {/* Button Container */}
                        <div className="buttons-container">
                            <button className="form-buttons form-buttons--orange" type="button" onClick={this.signup}>
                                Create Account
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>
        )
    }
}

export default SignUpModal
