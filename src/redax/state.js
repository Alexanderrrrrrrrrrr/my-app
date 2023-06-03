import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you', likesCount: 12 },
                { id: 2, message: 'it is my first post', likesCount: 11 },],
            newPostText: 'it-kavasytra'

        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Dimysh' },
                { id: 2, name: 'Andrey' },
                { id: 3, name: 'Sveta' },
                { id: 4, name: 'Sasha' },
                { id: 5, name: 'Victor' },
                { id: 6, name: 'Valera' },],

            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How are your it-kamasytra' },
                { id: 3, message: 'yo' },
                { id: 4, message: 'yo' },
                { id: 5, message: 'yo' }]
        },
        newMessageBody: ""
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    _callSubscriber() {
        console.log('State in gane')
    },




    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);

    }
}



window.store = store;
export default store;
