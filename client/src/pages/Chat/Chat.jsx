import { useState } from 'react';
import Message from '../../components/Message/Message.jsx';
import socket from '../../services/socket.js';
import {useAuth} from '../../context/AuthContext';
import queryString from 'query-string';
import styles from './Chat.module.css';
import FormButton from '../../components/FormButton/FormButton.jsx';

function Chat() {
  const queryParams = queryString.parse(window.location.search);
  const connected_user_id = queryParams.user;

  const [msg, setMsg] = useState("");

  const enviarMsg = (e) => {
    e.preventDefault();
    console.log("msg")
    // if(msg && connected_user_id){

    //   socket.emit("private message", {
    //     content: msg,
    //     to: connected_user_id
    //   });

    //   setMsg("");
    // }
  }

  let messages = ["msg1", "msg2"];

  return (
    <div id={styles.ChatContainer}>
      <div id={styles.Chat}>
        <div id={styles.ChatMessageBox}>
          { messages.map( (msg) => { return( <Message key={msg} /> ) }) }
        </div>
        {/* <div>
          <input 
          type="text"
          value = {msg}
          onChange={ (e) => setMsg(e.target.value) }/>
          <button onClick={enviarMsg}>Enviar</button>
        </div> */}
      </div>
      <div id={styles.InputTextContainer}>
        <div id={styles.InputTextBox}>
          <form onSubmit={enviarMsg} id={styles.InputForm}>
            <input id={styles.InputText} type="text" />
            <FormButton text='Send'></FormButton>
            {/* <button type='submit' id={styles.FormButton}>Send</button> */}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Chat
