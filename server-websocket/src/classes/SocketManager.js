const { Server } = require("socket.io");
const config = { cors: { origin: "*" } }

class SocketManager{
    io;
    sockets;

    constructor(httpServer){
        this.io = new Server(httpServer, config);

        this.io.use( this.socketAuth );
        
        this.sockets = new Map();
        
        this.io.on("connection", (socket) => {
            //userToken tem q ser userId
            this.sockets.set(socket.handshake.auth.userToken, socket);

            socket.on("disconnect", () => { this.sockets.delete(socket.id) });

            socket.on("private message", (data) => this.privateMessage(socket, data) );
            
        });
    }
    
    privateMessage(socket, data){
        let {content, to} = data;
        let toSocket = this.sockets.get(to);
        
        if(toSocket){
            toSocket.emit("private message", {
                content,
                from: socket.handshake.auth.userToken,
            });
        }

        // this.sockets.forEach((socket) => {
        //     if (socket.user_id === to){

        //         socket.emit("private message", {
        //             content,
        //             from: socket.id,
        //         });

        //     }
        // });
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