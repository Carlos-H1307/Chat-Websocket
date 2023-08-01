import { useState } from 'react'
import {io} from "socket.io-client";
import Message from '../../components/Message/Message.jsx';

function Chat() {
  // const socket = io("ws://localhost:3000", { cors: { origin: "*" } });
  const [msg, setMsg] = useState("");

  const enviarMsg = () => {
    if(msg){
      //socket.emit("msg", msg);
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
