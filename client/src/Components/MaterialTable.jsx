import React, {useState} from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MaterialTableRow from "./MaterialTableRow";


const MaterialTable = (props) => {
    const [jobName, setJobName] = useState("");
    const [partId, setPartId] = useState("");
    const [qty, setQty] = useState("");

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            jobName
                        </TableCell>
                        <TableCell>
                            partID
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        props.tableData.map((value, index) => {
                            return (
                                <MaterialTableRow data={value}/>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default MaterialTable;
