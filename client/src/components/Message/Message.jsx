import styles from "./message.module.css";

function Message({msg}) {
    return (
        <div className={styles.message}>
            <div className={styles.message_username}>
                {msg.from}
            </div>
            <div className={styles.message_msg}>
                <div>{msg.content}</div>
            </div>
        </div>
    )
}

export default Message;