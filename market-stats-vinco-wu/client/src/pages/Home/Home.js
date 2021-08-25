import React, { Component } from 'react';
import HomeSearch from '../../components/HomeSearch/HomeSearch';
import Footer from '../../components/Footer/Footer';
import './home.scss';
import home from '../../assets/icons/homeImage.png'

export class Home extends Component {
    state = {
        ticker: "",
    }
    onChange = (event) => {
        this.setState({
            ticker: event.target.value
        })
    }
    render() {
        return (
            <main className="main-content">
                <HomeSearch change={this.onChange} ticker={this.state.ticker} />
                <div className="image-container">
                    <img className="main-image" src={home} />
                </div>
                <div className="main-message">
                    <h1 className="main-message__header">Financial data all in the palm of your hand! </h1>
                    <h2 className="main-message__description">MarketStats can keep track of all stocks you've been watching! Sign Up Today </h2>
                </div>
                <Footer />
            </main>
        )
    }
}

export default Home
