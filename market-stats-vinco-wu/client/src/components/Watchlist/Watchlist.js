import React from 'react'
import './watchlist.scss'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import editIcon from '../../assets/icons/menu_black_24dp.svg';
import deleteIcon from '../../assets/icons/remove_circle_black_24dp.svg';

const Watchlist = (props) => {
    return (
        <div className="watchlist-box">
            <div className="watchlist-title" >
                <h2 className="your-watchlist">Your Watchlist</h2>
                <div className="edit-box" onClick={props.editPopUp}>
                    <img className="edit-icon" src={editIcon} alt="Edit Icon" />
                </div>
            </div>
            <TableContainer component={Paper} className="container">
                <Table size="small" aria-label="a dense table" className="table">
                    <TableHead className="table-header">
                        <TableRow className="table-header-row">
                            <TableCell className="table-header-row__cell" >Stock Name</TableCell>
                            <TableCell className="table-header-row__cell" align="right">EOD Price</TableCell>
                            <TableCell className="table-header-row__cell" align="right">1 Day %</TableCell>
                            <TableCell className="table-header-row__cell" align="right">1 Week %</TableCell>
                            {props.deleteState ?
                                (<TableCell className="table-header-row__cell" align="right">Delete</TableCell>) :
                                (<></>)}
                        </TableRow>
                    </TableHead>
                    <TableBody className="table-body">
                        {props.watchlistInfo.map((row) => (
                            <TableRow key={row.newlyadded} className="table-body-row">
                                <TableCell className="table-body-row__cell" component="th" scope="row">
                                    {row.newlyadded.toUpperCase()}
                                </TableCell>

                                <TableCell className="table-body-row__cell" align="right">{row.eod}</TableCell>
                                {row.newlyaddedDay >= 0 ?
                                    (<TableCell className="table-body-row__cell table-body-row__cell--green" align="right">{row.newlyaddedDay}</TableCell>) :
                                    (<TableCell className="table-body-row__cell table-body-row__cell--red" align="right">{row.newlyaddedDay}</TableCell>)}

                                {row.newlyaddedWeek >= 0 ?
                                    (<TableCell className="table-body-row__cell table-body-row__cell--green" align="right">{row.newlyaddedWeek}</TableCell>) :
                                    (<TableCell className="table-body-row__cell table-body-row__cell--red" align="right">{row.newlyaddedWeek}</TableCell>)}

                                {props.deleteState ?
                                    (<TableCell className="table-body-row__cell table-body-row__cell--green" align="right">
                                        <img className="delete-icon" src={row.delete} id={row.newlyadded} alt="delete icon" onClick={props.delete} /></TableCell>) :
                                    (<></>)}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Watchlist
