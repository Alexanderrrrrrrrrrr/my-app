import React from "react"
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + '' + s.active}>
                    <NavLink to="/dialogs/1">Dimysh</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Andrey</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Sveta</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Sasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Victor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/6">Valera</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.massage}>Hi</div>
                <div className={s.massage}>How are your it-kamasytra</div>
                <div className={s.massage}>yo</div>
            </div>

        </div >
    )
}
export default Dialogs;
