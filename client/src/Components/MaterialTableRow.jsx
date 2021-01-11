import React, {Component} from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

class MaterialTableRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobName: this.props.data.jobName,
            partID: this.props.data.partID
        };
    }

    render() {
        return (
            <React.Fragment>
                <TableRow>
                    <TableCell>
                        <div>{this.props.data.jobName}</div>
                    </TableCell>
                    <TableCell>
                        <div>{this.props.data.partID}</div>
                    </TableCell>
                </TableRow>
            </React.Fragment>
        );
    }
}

export default MaterialTableRow;
