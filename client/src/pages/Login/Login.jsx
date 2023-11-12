import { useState } from "react";
import { Link } from "react-router-dom";
import Api from "../../services/Api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";
import FormInput from '../../components/FormInput/FormInput';
import Form from '../../components/Form/Form';
import FormButton from "../../components/FormButton/FormButton";
import styles from './Login.module.css';

function Login() {
    const {setAuth} = useAuth();
    const {theme} = useTheme();
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = async (e) => {
      e.preventDefault();
        // try{
        //   await Api.post('/user/login', { username, password }, {'Access-Control-Allow-Origin': 'localhost:3000'})
    
        //   setAuth(true)
    
        //   navigate('/home')
        // }catch (error) {
        //     console.error(error);
        //   //toast.error(e.response.data.error)
        // }
      }

    return (
      <div id={styles.LoginMain}>
        <div id={styles.LoginContainer}>
          <Form onSubmit={login}>
            <FormInput idName={"Username"} type='text' value={username} setValue={setUsername}></FormInput>
            <FormInput idName={"Password"} type='password' value={password} setValue={setPassword}></FormInput>
            <FormButton text={"Enviar"}></FormButton>
          </Form>
        </div>
      </div>
    )
}

export default Login;