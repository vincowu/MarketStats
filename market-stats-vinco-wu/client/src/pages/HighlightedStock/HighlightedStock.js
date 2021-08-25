import React, { Component } from 'react'
import { API_URL } from '../../util'
import axios from 'axios';
import StockInfo from '../../components/StockInfo/StockInfo';

import HomeSearch from '../../components/HomeSearch/HomeSearch';

import { Redirect } from 'react-router-dom';

export class HighlightedStock extends Component {
    state = {
        stockInfo: null,
        startDate: "2021-08-11",
        endDate: "2021-08-25",
        chartData: null,
    }

    componentDidMount() {
        axios.get(`${API_URL}/${this.props.match.params.stock}`)
            .then((res) => {
                this.setState({
                    stockInfo: res.data,
                })
                return ((axios.post(`${API_URL}/financials/${this.props.match.params.stock}`, {
                    startDate: this.state.startDate,
                    endDate: this.state.endDate
                }
                )))
            })
            .then((response) => {
                this.setState({
                    chartData: response.data
                })
            })
            .catch(this.setState({
                stockInfo: "DNE"
            }))
    }

    render() {
        return (
            <>
                {
                    this.state.stockInfo && this.state.stockInfo !== "DNE" && this.state.chartData && (
                        <div className="stock">
                            <StockInfo stockInfo={this.state.stockInfo} chartData={this.state.chartData} />
                        </div>)
                }
                {
                    this.state.stockInfo && this.state.stockInfo === "DNE" && (
                        <>
                            {/* <Redirect to="/" /> */}
                        </>
                    )
                }
            </>
        )
    }
}

export default HighlightedStock
