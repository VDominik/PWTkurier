import React from 'react'
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import { withRouter } from 'next/router';


const axios = require('axios');



const EditovanieWithRouter = (props) => {
    const router = useRouter()


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








    //spread operator ...
    // let pole = [1,2,3];
    // let pole2 = [4,5,6];
    // let zlucene_pole = [...pole,...pole2];
    return <Editovanie {...props} router={router} handleSubmit={handleSubmit} />

}

    // const Editovanie = (props) => {
    //
    // }









export default withRouter (class Editovanie extends React.Component {



    //Zadefinovanie dát
    constructor(props) {
        //super is used to access the variables
        super(props);

        this.onChangeExpenseName = this.onChangeExpenseName.bind(this);
        this.onChangeExpenseLastname = this.onChangeExpenseLastname.bind(this);
        this.onChangeExpenseEmail = this.onChangeExpenseEmail.bind(this);
        this.onChangeExpenseVaha = this.onChangeExpenseVaha.bind(this);
        this.onChangeExpenseKrajina = this.onChangeExpenseKrajina.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            loc: props.router.query.id,
            submit: props.test,
            loaded: false,
            data: [],
            modi: ['pes'],
            firstname: '',
            lastname: '',
            email: '',
            vaha: '',
            krajina: '',

        }


    }

    ////Prijme dáta z daného linku
    componentDidMount() {
        //API request
        // console.log("IDCKO: " + this.state.loc);
        // console.log("BUTTNON: " + );
            axios.get("http://localhost:8000/api/objednavka/"+ this.state.loc).then(response => {
                //getting and setting api data into variable
                this.setState({data: response.data.objednavka});
               // console.log(response.data);
            })
        }


        onChangeExpenseName(e)  {
        console.log(e.target.value);
            console.log(this.state.firstname);
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
            axios.post('http://localhost:8000/api/objednavka/update/' + this.state.loc, expense)
                .then(res => console.log(res.data));
            // console.log(`Expense successfully created!`);
            // console.log(`Name: ${this.state.name}`);
            // console.log(`Amount: ${this.state.amount}`);
            // console.log(`Description: ${this.state.description}`);

            this.setState({firstname: '', lastname: '', email: '', vaha: '', krajina: ''})
        }


    //Zobrazenie dát z databázy
    render() {



        return (
            <div>
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
                        Vaha:
                        <input type="text" name="krajina" placeholder={this.state.data.krajina} onChange={this.onChangeExpenseKrajina}/>
                    </label>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

)


