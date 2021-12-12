import LeftNavbar from "../../components/Admin/LeftNavbar";
import Header from "../../components/Admin/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'next/router';
const axios = require('axios');
import React from 'react'

//Zadefinovanie a predpríprava routera na vloženie do class
const EditovanieWithRouter = (props) => {
    const router = useRouter()
    return <Admin {...props} router={router}/>
}

export default withRouter(class Admin extends React.Component {

        //Zadefinovanie dát
        constructor(props) {
            //super sa používa na prístup ku premenným
            super(props);
            this.onChangeExpenseVaha = this.onChangeExpenseVaha.bind(this);
            this.onChangeExpenseSluzbaDo = this.onChangeExpenseSluzbaDo.bind(this);
            this.onChangeExpenseSluzbaOd = this.onChangeExpenseSluzbaOd.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
            this.state = {
                loc: props.router,
                loaded: false,
                data: [],
                data1: [],
                data2: [],
                vaha: '',
                SluzbaDo: '',
                SlubaOd: '',
                vaha2: '',
                SluzbaDo2: '',
                SlubaOd2: '',
                vaha3: '',
                SluzbaDo3: '',
                SlubaOd3: '',
            }
        }

        //Prijme dáta z daného linku
        componentDidMount() {
            axios.get("http://localhost:8000/api/sluzby").then(response => {
                //Ziska dáta a vloží ích do State
                this.setState({data: response.data.sluzby[0]});
                this.setState({data1: response.data.sluzby[1]});
                this.setState({data2: response.data.sluzby[2]});
            })
        }

        //Čaká na zmenu a potom uloží dáta do State
        onChangeExpenseVaha(e) {
            this.setState({vaha: e.target.value})
            this.setState({vaha1: e.target.value})
            this.setState({vaha2: e.target.value})
        }

        //Čaká na zmenu a potom uloží dáta do State
        onChangeExpenseSluzbaDo(e) {
            this.setState({SluzbaDo: e.target.value})
            this.setState({SluzbaDo1: e.target.value})
            this.setState({SluzbaDo2: e.target.value})
        }

        //Čaká na zmenu a potom uloží dáta do State
        onChangeExpenseSluzbaOd(e) {
            this.setState({SluzbaOd: e.target.value})
            this.setState({SluzbaOd1: e.target.value})
            this.setState({SluzbaOd2: e.target.value})
        }

        //Ked sa vykoná stlačenie tlačidla
        onSubmit(e) {
            e.preventDefault()

            //Vloží data do konštanty
            const expense = {
                vaha: this.state.vaha,
                SluzbaDo: this.state.SluzbaDo,
                SluzbaOd: this.state.SluzbaOd,
                vaha2: this.state.SluzbaDo,
                SluzbaDo2: this.state.SluzbaDo1,
                SlubaOd2: this.state.SluzbaDo2,
                vaha3: this.state.SluzbaOd,
                SluzbaDo3: this.state.SluzbaOd1,
                SlubaOd3: this.state.SluzbaOd2,
            };

            //Odošle dáta z konštanty na danú url
            axios.post('http://localhost:8000/api/sluzby/update/' + e.target.id.value, expense)
                .then(res => {
                        let response = res.data;
                        if (response['success']) {
                            this.state.loc.push('/Admin');
                            alert("Údaje boli úspešne zmenené!");
                        } else {
                            alert("Nezmenil si žiadne údaje alebo si zadal neplatné!");
                        }
                    }
                );

            //Premaže hodnoty v State
            this.setState({
                vaha: '',
                SluzbaDo: '',
                SlubaOd: '',
                vaha2: '',
                SluzbaDo2: '',
                SlubaOd2: '',
                vaha3: '',
                SluzbaDo3: '',
                SlubaOd3: '',
            })
        }

        render() {
            return (
                <>
                    <LeftNavbar/>
                    <Header/>

                    {/*Vycentruje*/}
                    <div className="position-absolute top-50 start-50 translate-middle">

                        {/*Nastavenie formu a buttonu pre SK*/}
                        <div>
                            <form onSubmit={this.onSubmit}>
                                <h3>Editovanie pre SK</h3>
                                <br/>
                                <label>
                                    <input type="hidden" name="id" value="1"></input>
                                    Vaha:
                                    <input type="text" name="vaha" placeholder={this.state.data.vaha}
                                           onChange={this.onChangeExpenseVaha}/>
                                </label>
                                <label>
                                    Nastavenie Sluzby(DO):
                                    <input type="text" name="lastname" placeholder={this.state.data.SluzbaDo}
                                           onChange={this.onChangeExpenseSluzbaDo}/>
                                </label>
                                <label>
                                    Nastavenie Sluzby(OD):
                                    <input type="text" name="email" placeholder={this.state.data.SluzbaOd}
                                           onChange={this.onChangeExpenseSluzbaOd}/>
                                </label>
                                <button type="submit">Submit</button>
                                <br/>
                            </form>
                        </div>

                        {/*Nastavenie formu a buttonu pre EU*/}
                        <div>
                            <form onSubmit={this.onSubmit}>
                                <h3>Editovanie pre EU</h3>
                                <br/>
                                <label>
                                    <input type="hidden" name="id" value="2"></input>
                                    Vaha:
                                    <input type="text" name="vaha1" placeholder={this.state.data1.vaha}
                                           onChange={this.onChangeExpenseVaha}/>
                                </label>
                                <label>
                                    Nastavenie Sluzby(DO):
                                    <input type="text" name="lastname1" placeholder={this.state.data1.SluzbaDo}
                                           onChange={this.onChangeExpenseSluzbaDo}/>
                                </label>
                                <label>
                                    Nastavenie Sluzby(OD):
                                    <input type="text" name="email1" placeholder={this.state.data1.SluzbaOd}
                                           onChange={this.onChangeExpenseSluzbaOd}/>
                                </label>
                                <button type="submit">Submit</button>
                                <br/>
                            </form>
                        </div>

                        {/*Nastavenie formu a buttonu pre SVET*/}
                        <div>
                            <form onSubmit={this.onSubmit}>
                                <h3>Editovanie pre SVET</h3>
                                <br/>
                                <label>
                                    <input type="hidden" name="id" value="3"></input>
                                    Vaha:
                                    <input type="text" name="vaha2" placeholder={this.state.data2.vaha}
                                           onChange={this.onChangeExpenseVaha}/>
                                </label>
                                <label>
                                    Nastavenie Sluzby(DO):
                                    <input type="text" name="lastname2" placeholder={this.state.data2.SluzbaDo}
                                           onChange={this.onChangeExpenseSluzbaDo}/>
                                </label>
                                <label>
                                    Nastavenie Sluzby(OD):
                                    <input type="text" name="email2" placeholder={this.state.data2.SluzbaOd}
                                           onChange={this.onChangeExpenseSluzbaOd}/>
                                </label>
                                <button type="submit">Submit</button>
                                <br/>
                            </form>
                        </div>
                    </div>
                </>
            )
        }
    }
)
