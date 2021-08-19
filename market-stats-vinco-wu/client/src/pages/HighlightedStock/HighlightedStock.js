import React, { Component } from 'react'
import StockInfo from '../../components/StockInfo/StockInfo'
import { API_URL } from '../../util'
import axios from 'axios';
import HomeSearch from '../../components/HomeSearch/HomeSearch';
import StockDNEModal from '../../components/StockDNEModal/StockDNEModal';
import { Redirect } from 'react-router-dom';

export class HighlightedStock extends Component {
    state = {
        stockInfo: null,
        startDate: "",
        endDate: ""
    }

    componentDidMount() {
        axios.get(`${API_URL}/${this.props.match.params.stock}`)
            .then((res) => {
                this.setState({
                    stockInfo: res.data,
                })
            })
            .catch(this.setState({
                stockInfo: "DNE"
            }))
        // .then(axios.get(`${API_URL}/financials/${this.props.match.params.stock}`, {
        //     params: {
        //         startDate: this.state.startDate,
        //         endDate: this.state.endDate
        //     }
        // }))

    }

    render() {
        return (
            <>
                {this.state.stockInfo && this.state.stockInfo !== "DNE" && (
                    <div className="stock">
                        <StockInfo stockInfo={this.state.stockInfo} />
                    </div>)}
                {this.state.stockInfo && this.state.stockInfo === "DNE" && (
                    <>
                        {/* <Redirect to="/" /> */}
                    </>
                )}
            </>
        )
    }
}

export default HighlightedStock
