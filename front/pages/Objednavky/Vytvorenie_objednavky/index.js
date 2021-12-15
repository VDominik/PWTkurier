import LeftNavbar from "../../../components/User/LeftNavbar";
import Header from "../../../components/User/Header";
import style from "../../../styles/Table.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useRouter} from 'next/router';
import {useState} from 'react';
import axios from 'axios';

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
                alert("Vaša objednávka bola vytvorená, bude použítá kurierská služba: " + response.msg);
            } else {
                alert("Niekde nastala chyba, prosím skúste to znovu!");
            }
        } catch (error) {
        }
    };

    //Formulár
    return (
        <div className={style.ground}>
            <div>
                <LeftNavbar/>
                <Header/>

                <div className={style.wrapperr}>
                    <form onSubmit={handleSubmit}>

                        <div className={style.title}>
                            <h3>Vytvorenie objednávky</h3>
                        </div>

                        <br/>
                        <div className={style.form}>

                            <label className={style.inputfield}>
                                Meno:
                                <input type="text" name="firstname" className={style.input}
                                       value={modifiedData.firstname} onChange={handleChange}/>
                            </label>

                            <label className={style.inputfield}>
                                Prezvisko:
                                <input type="text" name="lastname" className={style.input} value={modifiedData.lastname}
                                       onChange={handleChange}
                                />
                            </label>

                            <label className={style.inputfield}>
                                Email:
                                <input type="text" name="email" className={style.input} value={modifiedData.email}
                                       onChange={handleChange}
                                />
                            </label>

                            <label className={style.inputfield}>
                                Váha(kg):
                                <input type="text" name="vaha" className={style.input} value={modifiedData.vaha}
                                       onChange={handleChange}
                                />
                            </label>

                            <label className={style.inputfield}>
                                Krajina:
                                <select name="krajina" className={style.custom_select} onChange={handleChange}>
                                    <option value="SK">SK</option>
                                    <option value="EU">EU</option>
                                    <option value="SVET">SVET</option>
                                </select>
                            </label>

                            <br/>
                            <div className={style.inputfield}>
                                <button className={style.btn} type="submit">Odoslať</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Home;