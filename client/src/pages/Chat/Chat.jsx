import { useCallback, useEffect, useState } from 'react';
import Message from '../../components/Message/Message.jsx';
import socket from '../../services/socket.js';
import {useAuth} from '../../context/AuthContext';
import queryString from 'query-string';
import styles from './Chat.module.css';
import FormButton from '../../components/FormButton/FormButton.jsx';
import { MessageProvider, useMessage } from '../../context/MessageContext.jsx';

function Chat() {
  const {sendMessage, messageList, setMessageList} = useMessage();

  const [msg, setMsg] = useState("");

  async function send(e){
    e.preventDefault();
    sendMessage(msg);
    setMsg('');
  }

  const changeMsg = useCallback((e) => {
    setMsg(e)
  }, [msg]);

  console.log(messageList)


  return (
      <div id={styles.ChatContainer}>
        <div id={styles.Chat}>
          <div id={styles.ChatMessageBox}>
            { messageList.map( (msg, index) => { return( <Message key={index} msg={msg}/> ) }) }
          </div>
        </div>
        <div id={styles.InputTextContainer}>
          <div id={styles.InputTextBox}>
            <form onSubmit={send} id={styles.InputForm}>
              <input 
              id={styles.InputText} 
              value={msg} 
              onChange={(e) => changeMsg(e.target.value)} 
              type="text" />
              <FormButton text='Send'>Send</FormButton>
            </form>
          </div>
        </div>
      </div>
  )
}

export default Chat
