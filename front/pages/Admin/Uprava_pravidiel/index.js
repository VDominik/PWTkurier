import React from 'react'
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import { withRouter } from 'next/router';


const axios = require('axios');

const EditovanieWithRouter = (props) => {

    const [modifiedData, setModifiedData] = useState({
        id: '',
        firstname: '',
        lastname: '',
        email: '',
        vaha: '',
    });
    const [] = useState(null);

    const handleChange = ({target: {name, value}}) => {
        setModifiedData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/objednavka/update/7', modifiedData);
            console.log(response);
        } catch (error) {
        }
    };

    const router = useRouter()
    return <Editovanie {...props} router={router} />
}




export default withRouter (class Editovanie extends React.Component {

        //Zadefinovanie dát
        constructor(props) {
            //super is used to access the variables
            super(props);

            this.onChangeExpenseVaha = this.onChangeExpenseVaha.bind(this);
            this.onChangeExpenseSluzbaDo = this.onChangeExpenseSluzbaDo.bind(this);
            this.onChangeExpenseSluzbaOd = this.onChangeExpenseSluzbaOd.bind(this);

            this.onSubmit = this.onSubmit.bind(this);

            this.state = {
                loc: props.router,
                loaded: false,
                data: [],
                data1: [],
                data2: [],
                vaha: '',
                SluzbaDo: '',
                SlubaOd: '',
                vaha2: '',
                SluzbaDo2: '',
                SlubaOd2: '',
                vaha3: '',
                SluzbaDo3: '',
                SlubaOd3: '',
            }
        }



        ////Prijme dáta z daného linku
        componentDidMount() {
            axios.get("http://localhost:8000/api/sluzby").then(response => {
                //Ziskanie a vlozenie dat do premennych
                console.log(response.data.sluzby);
                this.setState({data: response.data.sluzby[0]});
                this.setState({data1: response.data.sluzby[1]});
                this.setState({data2: response.data.sluzby[2]});
            })
        }



    onChangeExpenseVaha(e)  {
        this.setState({vaha: e.target.value})
        // this.setState({vaha1: e.target.value})
        // this.setState({vaha2: e.target.value})
    }

    onChangeExpenseSluzbaDo(e) {
        this.setState({SluzbaDo: e.target.value})
        // this.setState({SluzbaDo1: e.target.value})
        // this.setState({SluzbaDo2: e.target.value})
    }

    onChangeExpenseSluzbaOd(e) {
        this.setState({SluzbaOd: e.target.value})
        // this.setState({SluzbaOd1: e.target.value})
        // this.setState({SluzbaOd2: e.target.value})
    }



    onSubmit(e) {
        e.preventDefault()

        const expense = {
            vaha: this.state.vaha,
            SluzbaDo: this.state.SluzbaDo,
            SluzbaOd: this.state.SluzbaOd,
            // vaha2: this.state.SluzbaDo,
            // SluzbaDo2: this.state.SluzbaDo1,
            // SlubaOd2: this.state.SluzbaDo2,
            // vaha3: this.state.SluzbaOd,
            // SluzbaDo3: this.state.SluzbaOd1,
            // SlubaOd3: this.state.SluzbaOd2,
        };
        console.log("ID: " + this.state.id);
        console.log("Vaha: " + expense.vaha);
        console.log("SluzbaDo: " + expense.SluzbaDo);
        console.log("SluzbaOd: " + expense.SluzbaOd);
        axios.post('http://localhost:8000/api/sluzby/update/1', expense)
            .then(res => console.log(res.data));
        // console.log(`Expense successfully created!`);
        // console.log(`Name: ${this.state.name}`);
        // console.log(`Amount: ${this.state.amount}`);
        // console.log(`Description: ${this.state.description}`);

        // this.setState({ vaha: '',
        //     SluzbaDo: '',
        //     SlubaOd: '',
        //     vaha2: '',
        //     SluzbaDo2: '',
        //     SlubaOd2: '',
        //     vaha3: '',
        //     SluzbaDo3: '',
        //     SlubaOd3: '',})
    }







    //Zobrazenie dát z databázy
        render() {
            return (
                <>
                    {/*Nastavenie pre SK*/}
                <div>
                    <form onSubmit={this.onSubmit}>
                        <h3>Editovanie pre SK</h3>
                        <br/>
                        <label>
                            Vaha:

                            <input type="text" name="vaha" placeholder={this.state.data.vaha} onChange={this.onChangeExpenseVaha}/>
                        </label>
                        <label>
                            Nastavenie Sluzby(DO):
                            <input type="text" name="lastname" placeholder={this.state.data.SluzbaDo} onChange={this.onChangeExpenseSluzbaDo}/>
                        </label>
                        <label>
                            Nastavenie Sluzby(OD):
                            <input type="text" name="email" placeholder={this.state.data.SluzbaOd} onChange={this.onChangeExpenseSluzbaOd}/>
                        </label>
                        <button type="submit">Submit</button>
                        <br/>
                    </form>
                </div>

                    {/*Nastavenie pre EU*/}
                    <div>
                        <form onSubmit={EditovanieWithRouter.handlesubmit}>
                            <h3>Editovanie pre EU</h3>
                            <br/>
                            <label>
                                Vaha:
                                <input type="text" name="vaha" placeholder={this.state.data1.vaha} onChange={this.onChangeExpenseVaha}/>
                            </label>
                            <label>
                                Nastavenie Sluzby(DO):
                                <input type="text" name="lastname" placeholder={this.state.data1.SluzbaDo} onChange={this.onChangeExpenseSluzbaDo}/>
                            </label>
                            <label>
                                Nastavenie Sluzby(OD):
                                <input type="text" name="email" placeholder={this.state.data1.SluzbaOd} onChange={this.onChangeExpenseSluzbaOd}/>
                            </label>
                            <button type="submit">Submit</button>
                            <br/>
                        </form>
                    </div>

                    {/*Nastavenie pre SVET*/}
                    <div>
                        <form onSubmit={EditovanieWithRouter.handlesubmit}>
                            <h3>Editovanie pre SVET</h3>
                            <br/>
                            <label>
                                Vaha:
                                <input type="text" name="vaha" placeholder={this.state.data2.vaha} onChange={this.onChangeExpenseVaha}/>
                            </label>
                            <label>
                                Nastavenie Sluzby(DO):
                                <input type="text" name="lastname" placeholder={this.state.data2.SluzbaDo} onChange={this.onChangeExpenseSluzbaDo}/>
                            </label>
                            <label>
                                Nastavenie Sluzby(OD):
                                <input type="text" name="email" placeholder={this.state.data2.SluzbaOd} onChange={this.onChangeExpenseSluzbaOd}/>
                            </label>
                            <button type="submit">Submit</button>
                            <br/>
                        </form>
                    </div>

                </>
            )
        }
    }

)


