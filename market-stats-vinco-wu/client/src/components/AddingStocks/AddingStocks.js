import React from 'react'
import './addingStocks.scss'

const AddingStocks = (props) => {
    return (
        <form className="adding-stocks " onSubmit={props.add}>
            <input className="adding-stocks__input" placeholder="Input ticker of stock" name="stock" />
            <button className="adding-stocks__button btn" >Add</button>
        </form>
    )
}

export default AddingStocks
