import React from 'react';
import MaterialButton from "./MaterialButton";

export default function table(props) {
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>JobName</th>
                    <th>partId</th>
                </tr>
                </thead>
                <tbody>
                {
                    props.data.map(
                        (value, index) => {
                            return (
                                <tr>
                                    <td>
                                        {index}
                                    </td>
                                    <td>
                                        {value.jobName}
                                    </td>
                                    <td>
                                        {value.partId}
                                    </td>
                                    <td>
                                        <MaterialButton marginRight={2} text={"Update"}></MaterialButton>
                                        <MaterialButton text={"Delete"}></MaterialButton>
                                    </td>
                                </tr>
                            )
                        })
                }
                </tbody>
            </table>

        </div>
    );
}
