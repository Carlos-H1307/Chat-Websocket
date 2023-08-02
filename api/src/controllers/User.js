const sequelize = require('../database/connection');
const idGenerator = require('../util/generators/idGenerator');
const { generatePassword, isPasswordValid } = require('../util/generators/passwordGenerator');
const { generateUserSession, decodeUserSession } = require('../util/generators/userSessionGenerator')

class User {
    async get(req, res) {
		const { wsToken } = req.cookies

		if(!wsToken) {
			return res.status(401).send()
		}

		try{
			const { sub: userId } = decodeUserSession(wsToken)

			let user_db = await sequelize.query(` select username from user where user_id = '${userId}' `,
            { type: sequelize.QueryTypes.SELECT });

            user_db = user_db[0];
            
			res.json({ok: true, data: user_db})

		}catch (e) {
			return res.status(401)
		}
	}

	async create(req, res) {
		let { username, password, confirmation_password } = req.body;

		if (!username) {
			return res.status(400).json({ error: "Invalid username" });
		}

		if (!password) {
			return res.status(400).json({ error: "Invalid password" });
		}

		if (!confirmation_password) {
			return res.status(400).json({ error: "Invalid password" });
		}
		else{
			if(confirmation_password != password) {
				return res.status(400).json({ error: "The passwords do not match" });
			}
		}

		const hashedPassword = generatePassword(password);

		try {
            
            username = username.toLowerCase();

            const registeredUser = await sequelize.query(` select username from user where username = '${username}' `,
            { type: sequelize.QueryTypes.SELECT });
            
			if(registeredUser.length != 0){
                registeredUser = registeredUser[0];

                if(registeredUser.username === username) {
                    return res.status(400).json({error: 'User already exists.'});
				}
			}
            
			const user_id =  await idGenerator('user', 'user')
            
            const insertedUser = await sequelize.query(`
             insert into user values('${user_id}', '${username}', '${hashedPassword}') `,
             { type: sequelize.QueryTypes.INSERT });

             console.log("asd");

			const token = generateUserSession(user_id);
			res.cookie('wsToken', token);

			if(insertedUser){
				return res.status(201).json({ok: true});
			}
			else{
				return res.status(400).json({error: 'Cannot insert user, try again later'});
			}

		}
		catch(err){
		    return res.status(400).json({error: 'Cannot connect to database, try again later'});
		}

	}

    async login(req, res) {
		const { username, password } = req.body

		if(!username) {
			return res.status(400).json({error: "Invalid username"})
		}

		if(!password) {
			return res.status(400).json({error: "Invalid password"})
		}

        let user_db = await sequelize.query(`select * from user where username = '${username}' `,
        { type: sequelize.QueryTypes.SELECT });

		if( user_db.length == 0 ) {
			return res.status(404).json({error: "User not found"})
		}

        user_db = user_db[0];

		if(!isPasswordValid(user_db.password, password)){
            return res.status(400).json({error: 'Invalid password'})
		}
        
		delete user_db.password
        
		const token = generateUserSession(user_db.user_id)
        console.log("\n" + token + "\n")

		res.cookie('wsToken', token);
		res.json({ok: true, data: user_db, token})
	}

    async logout(req, res) {
		res.clearCookie('wsToken')
		res.send()
	}
}

module.exports = User;