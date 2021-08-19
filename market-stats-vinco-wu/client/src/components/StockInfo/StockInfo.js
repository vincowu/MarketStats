import React from 'react';
import StockInfoCharts from '../StockInfoCharts/StockInfoCharts';
import './stockinfo.scss';

const StockInfo = (props) => {
    const keyInfoKeys = ["Symbol", "Name", "Exchange", "Currency"]
    const infoKeys = ["Description", "Sector", "MarketCapitalization", "PERatio", "PEGRatio", "EPS", "RevenueTTM", "RevenuePerShareTTM", "GrossProfitTTM", "ProfitMargin", "TrailingPE", "ForwardPE", "52WeekHigh", "52WeekLow", "50DayMovingAverage", "SharesOutstanding", "ForwardAnnualDividendRate", "AnalystTargetPrice",]
    console.log(props.stockInfo)
    return (
        <div className="highlighted-stock">
            {/* Displays general info: Company Name, Ticker Symbol, Exchange it trades on and Currency it uses */}
            {keyInfoKeys.map((key) => {
                return (
                    (key == "Symbol" || key === "Name") ?
                        (<h2 className={`keyInfo keyInfo-${key}`}>
                            {props.stockInfo[key]}
                        </h2>) :
                        (<p className={`secondaryKeyInfo secondaryKeyInfo-${key}`}>          {props.stockInfo[key]}
                        </p>)
                )
            })}
            <StockInfoCharts />
            {infoKeys.map((key) => {
                return (
                    <div className={`stockInfo stockInfo${key}`}>
                        <h4 className={`stockInfo__title stockInfo__${key}`}>{key}</h4>
                        <p className={`stockInfo__info stockInfo__${key}Value`}>{props.stockInfo[key]}</p>
                    </div>
                )
            })
            }
        </div>

    )
}

export default StockInfo
