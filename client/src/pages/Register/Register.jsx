function Register() {
    return (
        <div class="login-card">
            <div>
                <div>Usuário</div>
                <input id="usernameInput" type="text" />
                <div>Senha</div>
                <input id="passwordInput" type="text" />
                <div>Confirmar senha</div>
                <input id="passwordInput2" type="text" />
            </div>
            <button>Registrar-se</button>
        </div>
    )
}

export default Register;