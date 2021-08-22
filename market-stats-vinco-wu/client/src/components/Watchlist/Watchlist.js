import React from 'react'
import './watchlist.scss'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// {stock: "AAPL", lasteod: 155, percentageDay: 13.4, percentageWeek: 17}
// const rows = [
//     createData('AAPL', 155, 13.4, 17)
// ]

const Watchlist = (props) => {
    return (
        <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Stock Name</TableCell>
                        <TableCell align="right">EOD Price</TableCell>
                        <TableCell align="right">1 Day %</TableCell>
                        <TableCell align="right">1 Week %</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.watchlistInfo.map((row) => (
                        <TableRow key={row.newlyadded}>
                            <TableCell component="th" scope="row">
                                {row.newlyadded}
                            </TableCell>
                            <TableCell align="right">{row.eod}</TableCell>
                            <TableCell align="right">{row.newlyaddedDay}</TableCell>
                            <TableCell align="right">{row.newlyaddedWeek}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Watchlist
