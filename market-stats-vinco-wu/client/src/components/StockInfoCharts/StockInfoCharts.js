import React from "react";
import "./stockInfoCharts.scss";
import { Line } from "react-chartjs-2";


const StockInfoCharts = (props) => {
    let correctedData = (data) => {
        return data.map((item) => ({
            close: item.close,
            date: item.date.slice(0, 10)
        }))
    };
    let reversedData = correctedData(props.chartData).reverse();
    let dates = reversedData.map((date) => {
        return (date["date"])
    });
    let prices = reversedData.map((close) => {
        return (close["close"])
    });

    const data = {
        labels: dates,
        datasets: [
            {
                label: "Stock Price",
                data: prices,
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            }
        ]
    };
    return (
        <div className="stock-chart">
            <Line data={data} width="400" height="200" responsive="true" maintainAspectRatio="false" className="stock-chart__line" />
        </div>
    )
}

export default StockInfoCharts



