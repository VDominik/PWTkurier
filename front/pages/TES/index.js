import {useState} from 'react';
import axios from 'axios';

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
        axios.get("http://localhost:8000/api/objednavka/"+this.props.router.query.id).then(response => {
            //getting and setting api data into variable
            this.setState({data: response.data.objednavka});
            // console.log(response.data);
        })
    }

const Home = () => {
    //Zadefinovanie dát
    const [modifiedData, setModifiedData] = useState({
        id: '',
        firstname: '',
        lastname: '',
        email: '',
        vaha: '',
    });
    const [] = useState(null);

    //Ukladá prijaté dáta
    const handleChange = ({target: {name, value}}) => {
        setModifiedData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    //Odošle dáta na daný link
    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/Vytvorenie', modifiedData);
            console.log(response);
        } catch (error) {
        }
    };

    //Formulár
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Pridavanie do databazy</h3>
                <br/>
                <label>
                    Firstname:
                    <input type="text" name="firstname" value={modifiedData.firstname} onChange={handleChange}/>
                </label>
                <label>
                    Lastname:
                    <input type="text" name="lastname" value={modifiedData.lastname} onChange={handleChange}
                    />
                </label>
                <label>
                    Email:
                    <input type="text" name="email" value={modifiedData.email} onChange={handleChange}
                    />
                </label>
                <label>
                    Vaha:
                    <input type="text" name="vaha" value={modifiedData.vaha} onChange={handleChange}
                    />kg
                </label>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Home;