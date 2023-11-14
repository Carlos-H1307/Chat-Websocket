import { createContext, useContext, useState, useEffect } from 'react';
import {useAuth} from "./AuthContext";
import { io } from "socket.io-client";
const SocketContext = createContext('socket');
import {useMessage} from './MessageContext';

export const SocketProvider = ({children}) => {
    const socket = io(import.meta.env.VITE_SOCKET_SERVER_BASE_URL, { autoConnect: false });
    const {user} = useAuth();
    socket.auth = {userToken: user};
    socket.connect();

    socket.on('private message', ({ content, from }) => {
        console.log('Nova mensagem de ' + from);
    });


    return(
        <SocketContext.Provider value={{socket}}>
            {children}
        </SocketContext.Provider>
    );
}

export function useSocket(){
    return useContext(SocketContext);
}


