import {useState} from 'react';
import axios from 'axios';

const Home = () => {

    //Zadefinovanie dát
    const [modifiedData, setModifiedData] = useState({
        id: '',
        firstname: '',
        lastname: '',
        email: '',
        vaha: '',
        krajina: '',
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
                <label>
                    Krajina:
                    <select  name="krajina"  onChange={handleChange}>
                        <option value="sk" onSelect={handleChange} >SK</option>
                        <option value="eu"  onSelect={handleChange}>EU</option>
                        <option value="svet" onSelect={handleChange}>SVET</option>
                    </select>
                </label>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Home;