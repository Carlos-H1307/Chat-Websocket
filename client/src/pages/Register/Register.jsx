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

    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaConfirmation, setSenhaConfirmation] = useState('');

    async function register(e){
        e.preventDefault();

        try{
            const data = { nome, senha, email };
            const res = await Api.post('/register', data);
            console.log(res);
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
                    <FormInput idName={"nome"} type='text' value={nome} setValue={setNome}>Username</FormInput>
                    <FormInput idName={"email"} type='text' value={email} setValue={setEmail}>Email</FormInput>
                    <FormInput idName={"senha"} type='password' value={senha} setValue={setSenha}>Password</FormInput>
                    <FormInput idName={"senhaConfirmation"} type='password' value={senhaConfirmation} setValue={setSenhaConfirmation}>Confirm Password</FormInput>
                    <FormButton>Send</FormButton>
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