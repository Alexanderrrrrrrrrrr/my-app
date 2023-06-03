import React from "react"
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redax/dialog-reducer";


const Dialogs = (props) => {

let state = props.store.getState().dialogsPage;

    let dialogElements = state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} />)

    let messagesElements = state.messages
        .map(m => <Message message={m.message} />)

    let newMessageBody = state.newMessageBody;

    let onSentMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder="Enter your message"></textarea></div>
                <div><button onClick={ onSentMessageClick }>Sent</button></div>
            </div>

        </div >
    )
}
export default Dialogs;
