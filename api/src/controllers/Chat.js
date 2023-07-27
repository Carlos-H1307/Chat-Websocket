const io = require("../util/io");

class Chat {
    async get(req, res){
        console.log("aspdj")
    }
}

//==========Parte do websocket==========/
// const chat = io.of("/chat");

// chat.on("connect", (socket) => {
//   console.log("Um usuário conectou-se ao chat ");
//   //socket.join("1");
//   socket.on("msg", (msg) => {
//     console.log(`${msg}`);
//     chat.emit("chat msg", msg);
//   });
// })

// httpServer.listen(3000, () => {
//   console.log("Rodando na porta 3000");
// });

module.exports = Chat;