import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactCard from './ContactCard';
import ContactForm from './ContactForm';
import { createLoadContactsThunkAction } from '../state/contactsActions';

const ContactsList = () => {

    const dispatch = useDispatch();

    useEffect(() => dispatch(createLoadContactsThunkAction()), []); //componentDidMount

    let contacts = useSelector(state => state.contacts);
    let shallWait = useSelector(state => state.shallWait);
    let errMsg = useSelector(state => state.errMsg);

    return (
        <section className='col-10 p-2 mx-auto'>
            <h4> Contacts List </h4>
            <div className='row g-3'>

                <div className='col-lg-3 col-md-6'>
                    <ContactForm />
                </div>

                {
                    shallWait && (
                        <div className='col'>
                            <strong>Please wait while processing ... </strong>
                        </div>
                    )
                }

                {
                    errMsg && (
                        <div className='col'>
                            <strong> {errMsg} </strong>
                        </div>
                    )
                }

                {
                    contacts && contacts.length === 0 ? (
                        <div className='col'>
                            <strong>No Records To Display</strong>
                        </div>
                    ) : (
                        contacts.map(c => (
                            <div className='col-lg-3 col-md-6' key={c.id}>
                                {c.isEditable ? <ContactForm c={c} /> : <ContactCard c={c} />}
                            </div>
                        ))
                    )
                }
            </div>
        </section>
    );
}

export default ContactsList;