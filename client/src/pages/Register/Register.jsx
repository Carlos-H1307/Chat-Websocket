import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Api from "../../services/Api";
import {useAuth} from "../../context/AuthContext";
import styles from './Register.module.css';
import FormInput from '../../components/FormInput/FormInput';
import Form from '../../components/Form/Form';
import FormButton from "../../components/FormButton/FormButton";


function Register() {
    const {setAuth} = useAuth();
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    async function register(e){
        e.preventDefault();
        try{
            const data = { nome, senha };
            /*const userResponse = await Api.post('/user', {username, password, passwordConfirmation});
            if(userResponse.status !== 201) {
              alert('Erro ao criar usuário');
              return;
            }

            setAuth(true);
            navigate('/home');
            */
      
          }catch (error) {
            console.error(error);
          }
    }

    return (
        <div id={styles.LoginMain}>
            <div id={styles.LoginContainer}>
                <Form onSubmit={register}>
                    <FormInput idName={"Username"} type='text' value={username} setValue={setUsername}></FormInput>
                    <FormInput idName={"Password"} type='password' value={password} setValue={setPassword}></FormInput>
                    <FormInput idName={"Confirmation"} type='password' value={passwordConfirmation} setValue={setPassword}>Confirm</FormInput>
                    <FormButton text={"Send"}></FormButton>
                </Form>
                <Link to={'/login'}>Login</Link>
            </div>
        </div>
        // <div className="login-card">
        //     <div>
        //         <div>Usuário</div>
        //         <input id="usernameInput" type="text"
        //         onChange={ (e) => setUsername(e.target.value) }/>

        //         <div>Senha</div>
        //         <input id="passwordInput" type="text" 
        //         onChange={ (e) => setPassword(e.target.value) }/>

        //         <div>Confirmar senha</div>
        //         <input id="passwordInput2" type="text"
        //         onChange={ (e) => setConfirmation_password(e.target.value) }/>

        //     </div>

        //     <button onClick={() => { register() } }>Registrar-se</button>

        //     <div>
        //         <Link to="/login">Já estou registrado.</Link>
        //     </div>
        // </div>
    )
}

export default Register;