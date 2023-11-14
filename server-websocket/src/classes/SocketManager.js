const { Server } = require("socket.io");
const config = { cors: { origin: "*" } }

class SocketManager{
    io;
    sockets;

    constructor(httpServer){
        this.io = new Server(httpServer, config);

        //this.io.use( this.socketAuth );
    
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
        const user_id = socket.handshake.auth.user_id;

        console.log(user_id + ': conectado.')
          
        if (!user_id){
          return next(new Error("invalid username"));
        }

        socket.user_id = user_id;
        next();
    }

    
}

exports.SocketManager = SocketManager;