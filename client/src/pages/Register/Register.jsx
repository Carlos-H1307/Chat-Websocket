import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Api from "../../services/Api";
import {useAuth} from "../../context/AuthContext";

function Register() {
    const {setAuth} = useAuth();
    const navigate = useNavigate();

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [confirmation_password, setConfirmation_password] = useState();

    async function register(){
        try{
            const userResponse = await Api.post('/user', {username, password, confirmation_password});
            if(userResponse.status !== 201) {
              alert('Erro ao criar usuário');
              return;
            }

            setAuth(true);
            navigate('/home');
      
          }catch (error) {
            console.error(error);
          }
    }

    return (
        <div className="login-card">
            <div>
                <div>Usuário</div>
                <input id="usernameInput" type="text"
                onChange={ (e) => setUsername(e.target.value) }/>

                <div>Senha</div>
                <input id="passwordInput" type="text" 
                onChange={ (e) => setPassword(e.target.value) }/>

                <div>Confirmar senha</div>
                <input id="passwordInput2" type="text"
                onChange={ (e) => setConfirmation_password(e.target.value) }/>

            </div>

            <button onClick={() => { register() } }>Registrar-se</button>

            <div>
                <Link to="/login">Já estou registrado.</Link>
            </div>
        </div>
    )
}

export default Register;