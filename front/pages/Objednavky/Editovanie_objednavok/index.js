import LeftNavbar from "../../../components/User/LeftNavbar";
import Header from "../../../components/User/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'next/router';
import {useState} from 'react';
import Link from 'next/link';
import React from 'react'

const axios = require('axios');

const EditovanieWithRouter = (props) => {
    const router = useRouter()

    //spread operator ...
    return <Editovanie {...props} router={router} handleSubmit={handleSubmit} />
    };

export default withRouter (class Editovanie extends React.Component {


    //Zadefinovanie dát
    constructor(props) {
        //použitie super na prístup ku premenným
        super(props);

        this.onChangeExpenseName = this.onChangeExpenseName.bind(this);
        this.onChangeExpenseLastname = this.onChangeExpenseLastname.bind(this);
        this.onChangeExpenseEmail = this.onChangeExpenseEmail.bind(this);
        this.onChangeExpenseVaha = this.onChangeExpenseVaha.bind(this);
        this.onChangeExpenseKrajina = this.onChangeExpenseKrajina.bind(this);
        this.onSubmit = this.onSubmit.bind(this);



        this.state = {
            loc: props.router.query.id,
            router: props.router,
            submit: props.test,
            loaded: false,
            data: [],
            firstname: '',
            lastname: '',
            email: '',
            vaha: '',
            krajina:'SK',
        }
    }

        //Prijme dáta z danej url
    componentDidMount() {
        //Request na API
            axios.get("http://localhost:8000/api/objednavka/"+ this.state.loc).then(response => {
                //získa data z api a vloží ich do premenných
                this.setState({data: response.data.objednavka});
            })
        }

        onChangeExpenseName(e)  {
            this.setState({firstname: e.target.value})
        }

        onChangeExpenseLastname(e) {
            this.setState({lastname: e.target.value})
        }

        onChangeExpenseEmail(e) {
            this.setState({email: e.target.value})
        }

        onChangeExpenseVaha(e) {
            this.setState({vaha: e.target.value})
        }

        onChangeExpenseKrajina(e) {
            this.setState({krajina: e.target.value})
        }

        //Ked sa vykoná stlačenie tlačidla
        onSubmit(e) {
            e.preventDefault()
            console.log(this.state.loc);

            const expense = {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                vaha: this.state.vaha,
                krajina: this.state.krajina
            };

            //Odošle dáta na danú url - API
            axios.post('http://localhost:8000/api/objednavka/update/' + this.state.loc, expense)
                .then((res) => {
                    let response = res.data;
                    if (response['success']) {
                        console.log("Login Successful");
                        this.state.router.push('/User');
                        alert("Vaša objednávka bola úspešne upravená, bude použítá kruierská služba: " + response.msg);
                    } else {
                        alert("Niekde nastala chyba, prosím skúste to znovu!");
                    }
                }
            );

            this.setState({
                firstname: '',
                lastname: '',
                email: '',
                vaha: '',
                krajina: ''
            })
        }

    //Zobrazenie dát z databázy
    render() {
        return (
            <>
            <LeftNavbar/>
              <Header/>
            <div className="position-absolute top-50 start-50 translate-middle">
                <form onSubmit={this.onSubmit}>
                    <h3>Editovanie do databazy</h3>
                    <br/>
                    <label>
                        Firstname:
                        <input type="text" name="firstname" placeholder={this.state.data.firstname} onChange={this.onChangeExpenseName} />
                    </label>
                    <label>
                        Lastname:
                        <input type="text" name="lastname" placeholder={this.state.data.lastname} onChange={this.onChangeExpenseLastname} />
                    </label>
                    <label>
                        Email:
                        <input type="text" name="email" placeholder={this.state.data.email} onChange={this.onChangeExpenseEmail} />
                    </label>
                    <label>
                        Vaha:
                        <input type="text" name="vaha" placeholder={this.state.data.vaha} onChange={this.onChangeExpenseVaha}/>kg
                    </label>
                    <label>



                        Krajina:

                        <select name="krajina"  onChange={this.onChangeExpenseKrajina}>
                            <option value="SK"  >SK</option>
                            <option value="EU"  >EU</option>
                            <option value="SVET" >SVET</option>
                        </select>

                        {/*<input type="text" name="krajina" placeholder={this.state.data.krajina} onChange={this.onChangeExpenseKrajina}/>*/}
                    </label>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
            </>
        )
    }
}
)


