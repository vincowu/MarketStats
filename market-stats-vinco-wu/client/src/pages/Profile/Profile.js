import React, { Component } from 'react';
import Watchlist from '../../components/Watchlist/Watchlist';
import Performance from '../../components/Performance/Performance';
import Historical from '../../components/Historical/Historical';
import AddingStocks from '../../components/AddingStocks/AddingStocks';
import axios from 'axios';
import { API_URL } from '../../util';
import { formatTime, subtractWeek } from '../../helpers/time';
import { withRouter } from 'react-router-dom';
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
        watchlistReturns: {
            day: 0,
            week: 0,
        }
    }
    correctedData = (data) => {
        return data.map((item) => ({
            close: item.close,
        }))
    }
    averageWatchlistReturns(listOfReturns, key) {
        let returns = 0
        for (let i = 0; i <= listOfReturns.length - 1; i++) {
            returns = returns + (parseFloat(listOfReturns[i][key]))
        }
        return (returns / listOfReturns.length)
    }
    adding = (event) => {
        event.preventDefault()
        console.log(`${API_URL}/financials/${event.target.stock.value}`)
        axios.post(`${API_URL}/financials/${event.target.stock.value}`, {
            startDate: this.state.startDate,
            endDate: this.state.endDate
        })
            .then((response) => {
                this.setState({
                    newStock: {
                        stockEodData: this.correctedData(response.data),
                        newlyadded: event.target.stock.value
                    }
                })
            })
            .then((response) => {
                let lengthOfArray = this.state.newStock.stockEodData.length - 1;
                let oneDayReturn = (((this.state.newStock.stockEodData[0]["close"] / this.state.newStock.stockEodData[1]["close"]) - 1) * 100).toFixed(2);
                let oneWeekReturn = (((this.state.newStock.stockEodData[0]["close"] / this.state.newStock.stockEodData[lengthOfArray]["close"]) - 1) * 100).toFixed(2);
                this.setState({
                    newStock: {
                        stockEodData: this.state.newStock.stockEodData,
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
            .then(() => {
                let daily = (this.averageWatchlistReturns(this.state.watchlistStocks, "newlyaddedDay")).toFixed(2)
                let weekly = (this.averageWatchlistReturns(this.state.watchlistStocks, "newlyaddedWeek")).toFixed(2)
                this.setState({
                    watchlistReturns: {
                        day: daily,
                        week: weekly,
                    }
                })
            })
    }

    componentDidMount() {
        let today = formatTime(new Date())
        let weekAgo = formatTime(subtractWeek(new Date()))
        let token = sessionStorage.getItem("token")
        this.setState({
            startDate: weekAgo,
            endDate: today
        })
        axios.get(API_URL + "/user/me", {
            headers: {
                token: token
            }
        })
            .then((res) => {
                console.log(res)
            })
    }

    render() {
        console.log(this.state)
        return (
            <>
                <Performance returnInfo={this.state.watchlistReturns} />
                <Watchlist watchlistInfo={this.state.watchlistStocks} />
                <AddingStocks add={this.adding} />
                <Historical />
            </>
        )
    }
}

export default withRouter(Profile)
