import { createContext, useContext, useState, useEffect } from 'react';
import {useAuth} from "./AuthContext";
import { io } from "socket.io-client";
const SocketContext = createContext('socket');

let socket = io(import.meta.env.VITE_SOCKET_SERVER_BASE_URL, { autoConnect: false });

export const SocketProvider = ({children}) => {
    const {user} = useAuth();
    //socket.auth = user;
    socket.connect();

    console.log(socket)

    socket.on("private message", ({ content, from }) => {
        console.log(content);
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


