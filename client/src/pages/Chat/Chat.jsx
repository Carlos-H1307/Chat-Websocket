import { useState } from 'react';
import Message from '../../components/Message/Message.jsx';
import socket from '../../services/socket.js';
import {useAuth} from '../../context/AuthContext';
import queryString from 'query-string';

function Chat() {
  const queryParams = queryString.parse(window.location.search);
  const connected_user_id = queryParams.user;

  const [msg, setMsg] = useState("");

  const enviarMsg = () => {
    if(msg && connected_user_id){

      socket.emit("private message", {
        content: msg,
        to: connected_user_id
      });

      setMsg("");
    }
  }

  let messages = ["msg1", "msg2"];

  return (
    <div id="chat">
      <div id="chat-message-box">

        { messages.map( (msg) => { return( <Message key={msg} /> ) }) }
      </div>
      <div>
        <input 
        type="text"
        value = {msg}
        onChange={ (e) => setMsg(e.target.value) }/>
        <button onClick={enviarMsg}>Enviar</button>
      </div>
    </div>
  )
}

export default Chat
