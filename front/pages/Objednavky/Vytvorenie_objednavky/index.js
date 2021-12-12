import {useRouter} from 'next/router';
import {useState} from 'react';
import axios from 'axios';
import LeftNavbar from "../../../components/User/LeftNavbar";
import Header from "../../../components/User/Header";

const Home = () => {

    //Zadefinovanie dát
    const router = useRouter();
    const [modifiedData, setModifiedData] = useState({
        id: '',
        firstname: '',
        lastname: '',
        email: '',
        vaha: '',
        krajina: 'SK',
    });
    const [] = useState(null);

    //Ukladá prijaté dáta
    const handleChange = ({target: {name, value}}) => {
        setModifiedData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    //Odošle dáta na daný link - API
    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const result = await axios.post('http://localhost:8000/api/Vytvorenie', modifiedData);
            let response = result.data;

            if (response['success']) {
                console.log("Login Successful");
                router.push('/User');
                alert("Vaša objednávka bola vytvorená, bude použítá kruierská služba: " + response.msg );
            } else {
                alert("Niekde nastala chyba, prosím skúste to znovu!");
            }
        } catch (error) {
        }
    };

    //Formulár
    return (
        <div>
            <LeftNavbar />
            <Header />
            <div className="position-absolute top-50 start-50 translate-middle">
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
                    <select name="krajina"  onChange={handleChange}>
                        <option value="SK"  >SK</option>
                        <option value="EU"  >EU</option>
                        <option value="SVET" >SVET</option>
                    </select>
                </label>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
        </div>
    );
};

export default Home;