import React, {Component} from "react";
import MaterialTable from "../Components/MaterialTable";
import MaterialTypography from "../Components/MaterialTypography";

class Homepage extends Component {
    constructor() {
        super();
        this.state = {
            tableData: [],
            jobName: "",
            partID: "",
            qty: "",
        };
        this.renderTable();
    }

    renderTable() {
        fetch(`${process.env.REACT_APP_API_URL}/getMockProducts`)
            .then((res) => res.json())
            .then((data) => {
                this.setState({tableData: data.body.Items});
            });
    }

    createHeader(data, typeOfRequest) {
        return {
            method: typeOfRequest, // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        };
    }

    render() {
        return (
            <div>
                <MaterialTypography
                    variant={"h4"}
                    paddingBottom={2}
                    text={"Company X"}
                    align={"center"}
                />
                <MaterialTable
                    tableData={this.state.tableData}
                />
            </div>
        );
    }
}

export default Homepage;
