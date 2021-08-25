import React from 'react';
import './performance.scss'

const Performance = (props) => {
    return (
        <div className="performance">
            <h2 className="performance-header">Watchlist Overall Performance</h2>
            <div className="performance-times">
                <h3 className="performance-times__title">Today</h3>
                {props.returnInfo.day >= 0 ?
                    (<p className="performance-times__percentages performance-times__percentages--green">{props.returnInfo.day}%</p>) :
                    (<p className="performance-times__percentages 
                performance-times__percentages--red">{props.returnInfo.day}%</p>)}
            </div>
            <div className="performance-times">
                <h3 className="performance-times__title">This Week</h3>
                {props.returnInfo.week >= 0 ?
                    (<p className="performance-times__percentages performance-times__percentages--green">{props.returnInfo.week}%</p>) :
                    (<p className="performance-times__percentages performance-times__percentages--red">{props.returnInfo.week}%</p>)
                }
            </div>
        </div >
    )
}

export default Performance
