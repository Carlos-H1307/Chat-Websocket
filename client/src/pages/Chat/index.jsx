import { useState } from 'react'
import {io} from "socket.io-client";

function Chat() {
  const socket = io("ws://localhost:3000", { cors: { origin: "*" } });
  const [msg, setMsg] = useState("");

  const enviarMsg = () => {
    if(msg){
      socket.emit("msg", msg);
      setMsg("");
    }
  }

  return (
    <>
      <p>Chat</p>
      <div>
        <input 
        type="text"
        value = {msg}
        onChange={ (e) => setMsg(e.target.value) }/>
        <button onClick={enviarMsg}>Enviar</button>
      </div>
    </>
  )
}

export default Chat
