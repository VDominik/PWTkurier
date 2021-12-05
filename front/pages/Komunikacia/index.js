import {useState} from 'react';
import axios from 'axios';

const Home = () => {
    //Zadefinovanie dát
    const [modifiedData, setModifiedData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
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
            const response = await axios.post('http://localhost:8000/api/login', modifiedData);
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
                    Pass:
                    <input type="text" name="password" value={modifiedData.password} onChange={handleChange}
                    />
                </label>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Home;