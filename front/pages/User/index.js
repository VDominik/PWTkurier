import LeftNavbar from "../../components/User/LeftNavbar";
import styles from "../../styles/Table.module.css";
import Header from "../../components/User/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import React from 'react';

const axios = require('axios');

class User extends React.Component {
    //Zadefinovanie dát
    constructor() {
        //použitie super na prístup ku premenným
        super();
        this.state = {
            data: []
        }
    }

    //Prijme dáta z danej url
    componentDidMount() {
        //Request na API
        axios.get("http://localhost:8000/api/objednavky")
            .then(response => {
                //získa data z api a vloží ich do premenných
                this.setState({data: response.data.objednavky});
                console.log(response.data.objednavky[0]);

            })
    }

    //Mazanie dát
    deleteObjednavka(id) {
        axios.delete("http://localhost:8000/api/Vymazanie/" + id)
            .then((res) => {
                if (res.status === 200) {
                    alert("Objednávka bola úspešne vymazaná!");
                    window.location.reload();
                } else Promise.reject();
            })
            .catch((err) => alert("Niečo sa pokazilo!"));
    };

    //Zobrazenie dát z databázy
    render() {
        return (
            <>
                <LeftNavbar/>
                <Header/>
                <div className={styles.table}>
                    <div className={styles.customers}>
                        <h1>Objednávky:</h1>
                        <table>
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Meno</th>
                                <th>Priezvisko</th>
                                <th>Email</th>
                                <th>Váha(kg)</th>
                                <th>Krajina</th>
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
                                            <td key="krajina">{result.krajina}</td>
                                            <td>
                                                <button type="button" class="btn btn-outline-secondary">
                                                    <Link className="text-decoration-none" href={{
                                                        pathname: 'Objednavky/Editovanie_objednavok/',
                                                        query: {id: result.id}
                                                    }}><a>Edit</a></Link>
                                                </button>
                                                <button type="button"
                                                        className="btn btn-outline-danger text-decoration-none"
                                                        onClick={() => this.deleteObjednavka(result.id)}>Delete
                                                </button>

                                            </td>
                                        </tr>
                                    )
                                }
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}

export default User;
