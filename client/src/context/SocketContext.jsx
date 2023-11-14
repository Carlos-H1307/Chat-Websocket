import { createContext, useContext, useState, useEffect } from 'react';
import {useAuth} from "./AuthContext";
import { io } from "socket.io-client";
const SocketContext = createContext('socket');
const socket = io(import.meta.env.VITE_SOCKET_SERVER_BASE_URL, { autoConnect: false });

console.log(socket)

export const SocketProvider = ({children}) => {
    const {user} = useAuth();
    socket.auth = {userToken: user};
    console.log(socket)
    socket.connect();

    socket.on("private message", ({ content, from }) => {
        console.log(content, from);
    });

    return(
        <SocketContext.Provider value={{}}>
            {children}
        </SocketContext.Provider>
    );
}

export function useSocket(){
    return useContext(SocketContext);
}


