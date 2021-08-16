import React, { Component } from 'react';
import HomeSearch from '../../components/HomeSearch/HomeSearch';
import './home.scss';

export class Home extends Component {
    state = {
        ticker: ""
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
            </main>
        )
    }
}

export default Home
