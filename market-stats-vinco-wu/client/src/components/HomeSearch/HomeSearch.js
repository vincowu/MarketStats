import React from 'react'
import searchIcon from '../../assets/icons/search_black_24dp.svg'
import { Link } from 'react-router-dom'
import './homeSearch.scss'

const HomeSearch = (props) => {

    return (
        <>
            <div className="home-message">
                <h1 className="home-message__description">Market analysis tool for the average investor</h1>
                <h2 className="home-message__description">Search your favorite companies by stock tickers and see how they're doing as a business!</h2>
            </div>
            <form className="search-bar" >
                <input name="stock" type="text" onChange={props.change} placeholder="ex. AAPL, MSFT" />
                <Link to={`/${props.ticker}`} >
                    <button className="search-bar__button"><img src={searchIcon} /></button>
                </Link>
            </form>
        </>
    )
}

export default HomeSearch
