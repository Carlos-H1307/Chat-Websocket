function Login() {
    return (
        <div className="login-card">
            <div>
                <div>Usuário</div>
                <input id="usernameInput" type="text" />
                <div>Senha</div>
                <input id="passwordInput" type="text" />
            </div>
            <button>Logar</button>
            <div>Registre-se</div>
        </div>
    )
}

export default Login;