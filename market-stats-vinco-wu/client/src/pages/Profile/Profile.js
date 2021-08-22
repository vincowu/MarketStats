import React, { Component } from 'react';
import Watchlist from '../../components/Watchlist/Watchlist';
import Performance from '../../components/Performance/Performance';
import Historical from '../../components/Historical/Historical';
import AddingStocks from '../../components/AddingStocks/AddingStocks';
import axios from 'axios';
import { API_URL } from '../../util';
import { formatTime, subtractWeek } from '../../helpers/time';
import { MenuList } from '@material-ui/core';

class Profile extends Component {
    state = {
        watchlistStocks: [],
        newStock: {
            newlyadded: null,
            newlyaddedWeek: null,
            newlyaddedDay: null,
            eodPrice: null,
            stockEodData: null
        },
        startDate: "",
        endDate: "",
    }
    correctedData = (data) => {
        return data.map((item) => ({
            close: item.close,
        }))
    }
    adding = (event) => {
        event.preventDefault()
        console.log(`${API_URL}/financials/${event.target.stock.value}`)
        axios.post(`${API_URL}/financials/${event.target.stock.value}`, {
            startDate: this.state.startDate,
            endDate: this.state.endDate
        })
            .then((response) => {
                console.log(response)
                this.setState({
                    newStock: {
                        stockEodData: this.correctedData(response.data),
                        newlyadded: event.target.stock.value
                    }
                })
            })
            .then((response) => {
                console.log(this.state.newStock.stockEodData)
                let lengthOfArray = this.state.newStock.stockEodData.length - 1;
                let oneDayReturn = (((this.state.newStock.stockEodData[0]["close"] / this.state.newStock.stockEodData[1]["close"]) - 1) * 100).toFixed(2);
                let oneWeekReturn = (((this.state.newStock.stockEodData[0]["close"] / this.state.newStock.stockEodData[lengthOfArray]["close"]) - 1) * 100).toFixed(2);
                this.setState({
                    newStock: {
                        newlyadded: this.state.newStock.newlyadded,
                        newlyaddedDay: oneDayReturn,
                        newlyaddedWeek: oneWeekReturn,
                        eod: this.state.newStock.stockEodData[0]["close"]
                    }
                })
            })
            .then((response) => {
                this.setState({
                    watchlistStocks: [...this.state.watchlistStocks, this.state.newStock],
                    newStock: {
                        newlyadded: null,
                        newlyaddedWeek: null,
                        newlyaddedDay: null,
                        eod: null,
                        stockEodData: null
                    }
                })
            })
    }

    componentDidMount() {
        let today = formatTime(new Date())
        let weekAgo = formatTime(subtractWeek(new Date()))
        this.setState({
            startDate: weekAgo,
            endDate: today
        })
    }

    render() {
        console.log(this.state.watchlistStocks)
        console.log(this.state)
        return (
            <>
                <Watchlist watchlistInfo={this.state.watchlistStocks} />
                <AddingStocks add={this.adding} />
            </>
        )
    }
}

export default Profile
