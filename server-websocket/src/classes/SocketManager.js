const { Server } = require("socket.io");
const config = { cors: { origin: "*" } }

class SocketManager{
    io;
    sockets;

    constructor(httpServer){
        this.io = new Server(httpServer, config);

        this.io.use( this.socketAuth );
    
        this.sockets = this.io.sockets.sockets;

        this.io.on("connection", (socket) => {
            socket.on("private message", (params) => this.privateMessage );
            
        });
    }

    privateMessage({content, to}){
        this.sockets.forEach((socket) => {
            if (socket.user_id === to){

                socket.emit("private message", {
                    content,
                    from: socket.id,
                });

            }
        });
    }

    socketAuth(socket, next){
        const userToken = socket.handshake.auth.userToken;

        console.log(userToken + ': conectado.')
          
        if (!userToken){
          return next(new Error("invalid username"));
        }

        socket.userToken = userToken;
        next();
    }

    
}

exports.SocketManager = SocketManager;