import {useState} from 'react';
import axios from 'axios';

const Home = () => {
    //Zadefinovanie dát
    const [modifiedData, setModifiedData] = useState({
        name: '',
        description: '',
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
            setErrorRestaurants(error);
        }
    };

    //Formulár
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Restaurants</h3>
                <br/>
                <label>
                    Name:
                    <input type="text" name="name" value={modifiedData.name} onChange={handleChange}/>
                </label>
                <label>
                    Description:
                    <input type="text" name="description" value={modifiedData.description} onChange={handleChange}
                    />
                </label>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Home;