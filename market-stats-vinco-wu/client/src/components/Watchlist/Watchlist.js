import React from 'react'
import './watchlist.scss'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function createData(stock, lasteod, percentageDay, percentageWeek) {
    return { stock, lasteod, percentageDay, percentageWeek };
}

const rows = [
    createData('AAPL', 155, 13.4, 17)
]

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
                    {rows.map((row) => (
                        <TableRow key={row.stock}>
                            <TableCell component="th" scope="row">
                                {row.stock}
                            </TableCell>
                            <TableCell align="right">{row.lasteod}</TableCell>
                            <TableCell align="right">{row.percentageDay}</TableCell>
                            <TableCell align="right">{row.percentageWeek}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


export default Watchlist
