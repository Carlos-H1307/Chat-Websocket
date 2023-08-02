import { useState } from "react";
import { Link } from "react-router-dom";
import Api from "../../services/Api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Login() {
    const {setAuth} = useAuth();
    const navigate = useNavigate();

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    
    const login = async (formEvent) => {
        try{
          await Api.post('/user/login', { username, password }, {'Access-Control-Allow-Origin': 'localhost:3000'})
    
          setAuth(true)
    
          navigate('/home')
        }catch (error) {
            console.error(error);
          //toast.error(e.response.data.error)
        }
      }

    return (
        <div className="login-card">
            <div>
                <div>Usuário</div>
                <input 
                id="usernameInput" 
                type="text" 
                onChange={ (e) => setUsername(e.target.value) }/>

                <div>Senha</div>
                <input 
                id="passwordInput" 
                type="text" 
                onChange={ (e) => setPassword(e.target.value) }/>
            </div>

            <button onClick={() => { login() }}>Logar</button>

            <div><Link to="/register">Registre-se</Link></div>
        </div>
    )
}

export default Login;