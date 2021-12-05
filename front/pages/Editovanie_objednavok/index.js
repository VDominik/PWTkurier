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
        super();
        this.state = {
            loc: props.router,
            loaded: false,
            data: []
        }
    }

    ////Prijme dáta z daného linku
    componentDidMount() {
        //API request
            axios.get("http://localhost:8000/api/objednavka/7").then(response => {
                //getting and setting api data into variable
                this.setState({data: response.data.objednavka});
               // console.log(response.data);
            })
        }




    //Zobrazenie dát z databázy
    render() {
        return (
            <div>
                <form onSubmit={EditovanieWithRouter.handlesubmit}>
                    <h3>Editovanie do databazy</h3>
                    <br/>
                    <label>
                        Firstname:
                        <input type="text" name="firstname"  onChange={EditovanieWithRouter.handleChange}/>
                    </label>
                    <label>
                        Lastname:
                        <input type="text" name="lastname" onChange={EditovanieWithRouter.handleChange}/>
                    </label>
                    <label>
                        Email:
                        <input type="text" name="email"  onChange={EditovanieWithRouter.handleChange}/>
                    </label>
                    <label>
                        Vaha:
                        <input type="text" name="vaha"  onChange={EditovanieWithRouter.handleChange}/>kg
                    </label>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

)


