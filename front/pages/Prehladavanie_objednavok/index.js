import React from 'react'
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

const axios = require('axios');

class Prehladavanie extends React.Component {
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
        axios.get("http://localhost:8000/api/objednavky").then(response => {
            //getting and setting api data into variable
            this.setState({data: response.data.objednavky});
            console.log(response.data.objednavky[0]);

        })
    }

    deleteStudent(id) {
        axios
            .delete(
                "http://localhost:8000/api/Vymazanie/" + id)
            .then((res) => {
                if (res.status === 200) {
                    alert("Student successfully deleted");
                    window.location.reload();
                } else Promise.reject();
            })
            .catch((err) => alert("Something went wrong"));
    };




    //Zobrazenie dát z databázy
    render() {
        return (
            <div>
                <h1>Demo Data</h1>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Vaha</th>
                        <th>Akcie</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.data.map((result) => {
                            return (
                                <tr key={result.id}>
                                    <td key="id">{result.id}</td>
                                    <td key="firstname">{result.firstname}</td>
                                    <td key="lastname">{result.lastname}</td>
                                    <td key="email">{result.email}</td>
                                    <td key="vaha">{result.vaha}</td>
                                    <td>
                                        {/*<Link to={"/Editovanie_objednavok/"+ result.id}><a>Edit</a></Link>*/}
                                        <Link href={{ pathname: '/Editovanie_objednavok/', query: { id: result.id }  }}><a>edit</a></Link>
                                        <button onClick={()=>this.deleteStudent(result.id)}>Delete</button>
                                    </td>
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


export default Prehladavanie;

