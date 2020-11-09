import React from 'react';
import axios from 'axios';

class List extends React.Component {

    state = {
        apiData: [],
    }

    componentDidMount = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((result) => {
            this.setState({
                apiData: result.data,
            })
        })
        .catch((error) => console.error(error))
    }
    render() {
        
        const displayNames = this.state.apiData.map((person, index) => {
            return(<li key={index}>{person.name} {person.email}</li>)
        })
        const tableData = this.state.apiData.map((person, index) => {
            return(
                <tr key={index}>
                    <td>{person.id}</td>
                    <td>{person.name}</td>
                    <td>{person.username}</td>
                    <td>{person.email}</td>
                    <td>{person.address.street}</td>
                    <td>{person.phone}</td>
                    <td>{person.website}</td>
                    <td>{person.company.name}</td>
                </tr>
            )
        })
        return (
        <>
        <ul>{displayNames}</ul>
        <table>
            <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone Number</th>
                <th>Website</th>
                <th>Company</th>
            </thead>
            <tbody>
                {tableData}
            </tbody>
        </table>
        </>
        )
    }
}

export default List;