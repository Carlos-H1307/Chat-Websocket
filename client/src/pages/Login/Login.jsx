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

    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    
    const login = async (e) => {
      e.preventDefault();
      let res;
        try{
          const data = { nome, senha };

          res = await Api.post('/auth', data);
          const obj = res.data;
          sessionStorage.setItem("token", obj.token);

          setAuth(true)
    
          navigate('/home')
        }catch (error) {
            console.log("Unauthorized");
          //toast.error(e.response.data.error)
        }
      }

    return (
      <div id={styles.LoginMain}>
        <div id={styles.LoginContainer}>
          <Form onSubmit={login}>
            <FormInput idName={"Username"} type='text' value={nome} setValue={setNome}></FormInput>
            <FormInput idName={"Password"} type='password' value={senha} setValue={setSenha}></FormInput>
            <FormButton text={"Send"}></FormButton>
          </Form>
          <Link to={'/register'}>Register</Link>
        </div>
      </div>
    )
}

export default Login;