import { EDIT_CONTACT, UNEDIT_CONTACT, REFRESH_CONTACTS,WAIT_FOR_CONTACTS,CONTACTS_ERR } from './contactsActions';

const initState = () => ({
    contacts: [],
    shallWait:false,
    errMsg:undefined
});

const contactsReducer = (state = initState(), action) => {

    let { contacts, shallWait, errMsg } = state;

    switch (action.type) {
        case REFRESH_CONTACTS:
            contacts = [...action.contacts];
            shallWait = false;
            errMsg = undefined;
            break;
        case CONTACTS_ERR:
            errMsg = action.errMsg;
            shallWait = false;
            break;
        case WAIT_FOR_CONTACTS:
            shallWait = true;
            errMsg = undefined;
        case EDIT_CONTACT: 
            contacts = contacts.map(c => c.id === action.id ? { ...c, isEditable: true } : c);
            break;
        case UNEDIT_CONTACT: 
            contacts = contacts.map(c => c.id === action.id ? { ...c, isEditable: undefined } : c);
            break;        
    }

    return { contacts, shallWait, errMsg }; //modified state
};

export default contactsReducer;