
import axios from 'axios';

//Action Types

export const REFRESH_CONTACTS = "Refresh Contacts";
export const WAIT_FOR_CONTACTS = "Wait For Contacts";
export const CONTACTS_ERR = "Contacts Error";
export const EDIT_CONTACT = "Mark Contact Editable";
export const UNEDIT_CONTACT = "UnMark Contact Editable";

//Action Creators

export const createRefreshContactsAction = contacts => ({ type: REFRESH_CONTACTS, contacts });
export const createWaitForContactsAction = () => ({ type: WAIT_FOR_CONTACTS });
export const createContactsErrorAction = errMsg => ({ type: CONTACTS_ERR, errMsg });
export const createEditContactAction = id => ({ type: EDIT_CONTACT, id });
export const createUnEditContactAction = id => ({ type: UNEDIT_CONTACT, id });

//Thunk Action Creators

const apiEndPoint = "http://localhost:8888/contacts";

export const createLoadContactsThunkAction = () => (dispatch => {
    dispatch(createWaitForContactsAction());

    axios.get(apiEndPoint)
        .then(resp => dispatch(createRefreshContactsAction(resp.data)))
        .catch(err => {
            console.log(err);
            dispatch(createContactsErrorAction("Unable to load data! Please retry later!"));
        })
});

export const createAddContactThunkAction = contact => (dispatch => {
    dispatch(createWaitForContactsAction());

    axios.post(apiEndPoint, contact)
        .then(resp => dispatch(createLoadContactsThunkAction()))
        .catch(err => {
            console.log(err);
            dispatch(createContactsErrorAction("Unable to save data! Please retry later!"));
        })
});

export const createUpdateContactThunkAction = contact => (dispatch => {
    dispatch(createWaitForContactsAction());

    axios.put(apiEndPoint + "/" + contact.id, contact)
        .then(resp => dispatch(createLoadContactsThunkAction()))
        .catch(err => {
            console.log(err);
            dispatch(createContactsErrorAction("Unable to save data! Please retry later!"));
        })
});

export const createDeleteContactThunkAction = id => (dispatch => {
    dispatch(createWaitForContactsAction());

    axios.delete(apiEndPoint + "/" + id)
        .then(resp => dispatch(createLoadContactsThunkAction()))
        .catch(err => {
            console.log(err);
            dispatch(createContactsErrorAction("Unable to delete data! Please retry later!"));
        })
});
