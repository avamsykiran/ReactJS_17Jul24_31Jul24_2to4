
import { ADD_CONTACT, UPD_CONTACT, EDIT_CONTACT, UNEDIT_CONTACT, DEL_CONTACT } from './contactsActions';

const initState = () => ({
    contacts: [
        { id: 1, fullName: "Vamsy Kiran", mobile: "9052224753", mailId: "vamsy@gmail.com" },
        { id: 2, fullName: "KGN Murthy", mobile: "9052224751", mailId: "murthy@gmail.com" },
        { id: 3, fullName: "Suresh Pedireddy", mobile: "9052224752", mailId: "suresh@gmail.com" },
        { id: 4, fullName: "Ramesh Pekala", mobile: "9052224754", mailId: "ramesh@gmail.com" },
        { id: 5, fullName: "M. Krishna", mobile: "9052224755", mailId: "krishna@gmail.com" }
    ],
    nextId: 6
});

const contactsReducer = (state = initState(), action) => {

    let { contacts, nextId } = state;

    switch (action.type) {
        case ADD_CONTACT:
            contacts = [...contacts, { ...action.contact, id: nextId }];
            nextId = nextId + 1;
            break;
        case UPD_CONTACT:
            contacts = contacts.map(c => c.id === action.contact.id ? { ...action.contact, isEditable: undefined } : c);
            break;
        case EDIT_CONTACT: 
            contacts = contacts.map(c => c.id === action.id ? { ...c, isEditable: true } : c);
            break;
        case UNEDIT_CONTACT: 
            contacts = contacts.map(c => c.id === action.id ? { ...c, isEditable: undefined } : c);
            break;
        case DEL_CONTACT: 
            contacts = contacts.filter(c => c.id!==action.id);
            break;
    }

    return { contacts, nextId }; //modified state
};

export default contactsReducer;