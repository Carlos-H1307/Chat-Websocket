import { createContext, useContext, useState, useEffect } from 'react';
import socket from '../services/socket.js';
import {useAuth} from "./AuthContext";

const SocketContext = createContext('socket');

export const SocketProvider = ({children}) => {
    const {user} = useAuth();

    socket.auth = user;
    socket.connect();

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


