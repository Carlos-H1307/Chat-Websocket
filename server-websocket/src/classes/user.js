class user{
    id;
    name;
    email;
    token;

    constructor(id, name, email, token){
        this.id = id;
        this.name = name;
        this.email = email;
        this.token = token;
    }
}

export default user;