import Navbar from "../../components/Navbar/navbar";

const register = () => {
    return (
        <>
            <Navbar/>
            <div>
                <h1>Registrácia</h1>
                <p>Vyplnte registračný formulár</p>
                <label htmlFor="email"><b>Email</b></label>
                <input/> <br/>
                <label htmlFor="psw"><b>Heslo</b></label>
                <input/> <br/>
                <label htmlFor="psw-repeat"><b>Znova zadajte heslo</b></label>
                <input/> <br/>
                <p>Vytvorením vášho účtu súhlasíte s obchodnými podmienkami... <a href="#"> Obchodné podmienky</a>.</p>
                <button type={<textarea name="reg" id="1" cols="70" rows="40"></textarea>}>registracia</button>
                <button type={<textarea name="reg" id="1" cols="70" rows="40"></textarea>}>zrušiť</button>
            </div>
        </>
    )
}

export default register;