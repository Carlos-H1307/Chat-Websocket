import { createContext, useContext, useState, useEffect } from 'react';
import Api from "../services/Api";
import queryString from 'query-string';
import { useParams } from 'react-router-dom';
import {useSocket} from './SocketContext';
import { useAuth } from './AuthContext';

const MessageContext = createContext('message');

export const MessageProvider = ({children}) => {
  const [messageList, setMessageList] = useState([]);
  const contactId = useParams().id;
  let {socket}  = useSocket();
  const { user }  = useAuth(); 

  async function sendMessage(msg){
    if(msg && contactId){
      socket.emit('private message', { content: msg, to: contactId });
      setMessageList((m) => [...m, { content: msg, from: user }]);
    }
  }

  function handlePrivateMessage({ content, from }){
    setMessageList((m) => [...m, { content, from }]);
  }
  
  useEffect(() => {
    socket.on('private message', handlePrivateMessage);

    return() => {
      socket.off('private message', handlePrivateMessage);
    };
  }, [socket]);
  

  return (
    <MessageContext.Provider value={{messageList, sendMessage, setMessageList}}>
      {children}
    </MessageContext.Provider>
  )
}

export function useMessage(){
  return useContext(MessageContext);
}
