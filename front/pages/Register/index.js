import Navbar from "../../components/Navbar/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useRouter} from 'next/router';
import {useState} from 'react';
import axios from 'axios';

export default function register() {

    const router = useRouter();

    //Zadefinovanie dát
    const [modifiedData, setModifiedData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    });
    const [] = useState(null);

    //Ukladá zmenené dáta
    const handleChange = ({target: {name, value}}) => {
        setModifiedData(prev => ({
            ...prev, [name]: value,
        }));
    };

    //Odošle dáta z konštanty na danú url
    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/register', modifiedData);
            console.log(response);
        } catch (error) {
        }

        router.push('/Login');
        alert("Úspešne si sa zaregistroval!");
    }

    return (<>
        <Navbar/>
        <div className="position-absolute top-50 start-50 translate-middle">
            <div>
                <form onSubmit={handleSubmit}>
                    <h1>Registrácia</h1>
                    <label><b>Meno</b></label>
                    <input name="firstname" name="firstname" onChange={handleChange}></input>

                    <label><b>Priezvisko</b></label>
                    <input name="lastname" name="lastname" onChange={handleChange}></input>

                    <label> <b>Email</b></label>
                    <input type="text" name="email" onChange={handleChange}></input>

                    <label> <b>Heslo</b> </label>
                    <input type="password" name="password" onChange={handleChange}></input>

                    <button type="submit">Registrovať sa</button>
                </form>
            </div>
        </div>
    </>)
}
