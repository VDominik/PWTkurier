import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const axios = require('axios');

class Demo extends React.Component {
    //Zadefinovanie dát
    constructor() {
        //super is used to access the variables
        super();
        this.state = {
            data: []
        }
    }

    ////Prijme dáta z daného linku
    componentDidMount() {
        //API request
        axios.get("http://localhost:8000/api/user").then(response => {
            //getting and setting api data into variable
            this.setState({data: response.data.users});
            console.log(response.data.users[0]);

        })
    }

    //Zobrazenie dát z databázy
    render() {
        return (
            <div>
                <h1>Demo Data</h1>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Website</th>
                        <th>Wasdfasf</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.data.map((result) => {
                            return (
                                <tr>
                                    <td>{result.firstname}</td>
                                    <td>{result.email}</td>
                                    <td>{result.lastname}</td>
                                </tr>
                            )
                        }
                    )}
                    </tbody>
                </table>
                <div className="jumbotron text-center mb-0">
                    <h1>Footer</h1>
                </div>
            </div>
        )
    }
}

export default Demo;

