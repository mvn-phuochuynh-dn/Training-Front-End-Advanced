import React, { Component } from 'react';

export default class Table extends Component {

    renderData = () => {
        let { dataRegister,deleteItem } = this. props;
        return dataRegister.map( (item, index) => {
            console.log(item);
            return (
                <tr key={item.name}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.birthday}</td>
                    <td>{item.email}</td>
                    {item.gender ==0 ? <td>Female</td> : <td>Male</td>}
                    <td>{item.biography}</td>
                    <td>{item.jobRole}</td>
                    <td><button onClick={deleteItem(item.name)}>Delete</button></td>
                </tr>
            )
        })
    }

    render() {
        return (
            <table className="data-table">
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Name</th>
                        <th>Birthday</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Biography</th>
                        <th>Job Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderData()}
                </tbody>
            </table>
        )
    }
}
