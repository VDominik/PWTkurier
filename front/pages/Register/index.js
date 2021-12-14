import Navbar from "../../components/Navbar/navbar";
import {useRouter} from 'next/router';
import {useState} from 'react';
import axios from 'axios';
import styles from "../../styles/Register.module.css";

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
                <div>
                    <div className={styles.groundmain}>

                                    <form className={styles.wrapperr} onSubmit={handleSubmit}>
                                        <div className={styles.title}>
                                        <h1>Registrácia</h1>
                                        </div>

                                        <div className={styles.form}>
                                            <label className={styles.inputfield}><b>Meno</b>
                                            <input className={styles.input} name="firstname" name="firstname" onChange={handleChange}></input>
                                            </label>

                                            <label className={styles.inputfield}><b>Priezvisko</b>
                                            <input className={styles.input} name="lastname" name="lastname" onChange={handleChange}></input>
                                            </label>


                                            <label className={styles.inputfield}> <b>Email</b>
                                            <input className={styles.input} type="text" name="email" onChange={handleChange}></input>
                                            </label>

                                        <label className={styles.inputfield}> <b>Heslo</b>
                                        <input className={styles.input} type="password" name="password" onChange={handleChange}></input>
                                        </label>

                                            <div className={styles.inputfield}>
                                            <button className={styles.btn} type="submit">Registrovať</button>
                                            </div>

                                        </div>

                                    </form>

                        {/*</form>*/}
                    </div>
                </div>




    </>)
}
