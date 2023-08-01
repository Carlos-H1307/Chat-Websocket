import styles from "./message.module.css";

function Message(msg) {
    let message = {
        username: "carlos",
        msg: "bom dia "
    }
    return (
        <div className={styles.message}>
            <div className={styles.message_username}>
                {message.username}
            </div>
            <div className={styles.message_msg}>
                <div>{message.msg}</div>
            </div>
        </div>
    )
}

export default Message;