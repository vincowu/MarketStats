import React, { Component } from 'react';
import Watchlist from '../../components/Watchlist/Watchlist';
import Performance from '../../components/Performance/Performance';
import Historical from '../../components/Historical/Historical';
import AddingStocks from '../../components/AddingStocks/AddingStocks';

class Profile extends Component {
    state = {
        watchlistStocks: [],
        newlyadded: ""
    }
    adding = (event) => {
        event.preventDefault()
        let stock = event.target.stock.value
        this.setState({
            watchlistStocks: [...this.state.watchlistStocks, stock],
            newlyadded: stock
        })
    }

    render() {
        console.log(this.state.watchlistStocks)
        return (
            <>
                <Watchlist watchlist={this.state.watchlistStocks} />
                <AddingStocks add={this.adding} />
            </>
        )
    }
}

export default Profile
