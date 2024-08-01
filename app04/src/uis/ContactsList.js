import { useState } from 'react';
import ContactCard from './ContactCard';
import ContactForm from './ContactForm';

const ContactsList = () => {

    let [contacts, setContacts] = useState([
        { id: 1, fullName: "Vamsy Kiran", mobile: "9052224753", mailId: "vamsy@gmail.com" },
        { id: 2, fullName: "KGN Murthy", mobile: "9052224751", mailId: "murthy@gmail.com" },
        { id: 3, fullName: "Suresh Pedireddy", mobile: "9052224752", mailId: "suresh@gmail.com" },
        { id: 4, fullName: "Ramesh Pekala", mobile: "9052224754", mailId: "ramesh@gmail.com" },
        { id: 5, fullName: "M. Krishna", mobile: "9052224755", mailId: "krishna@gmail.com" }
    ]);

    let [nextId, setNextId] = useState(6);

    const addContact = contact => {
        contact.id = nextId;
        setContacts([...contacts, contact]);
        setNextId(nextId + 1);
    };

    const remove = id => {
        setContacts(contacts.filter(c => c.id !== id));
    }

    const markEditable = id => {
        setContacts(contacts.map(c => c.id !== id ? c : { ...c, isEditable: true }));
    }

    const cancelEditable = id => {
        setContacts(contacts.map(c => c.id !== id ? c : { ...c, isEditable: undefined }));
    }

    const updateContact = contact => {
        setContacts(contacts.map(c => c.id !== contact.id ? c : { ...contact, isEditable: undefined }));
    }

    return (
        <section className='col-10 p-2 mx-auto'>
            <h4> Contacts List </h4>
            <div className='row g-3'>

                <div className='col-lg-3 col-md-6'>
                    <ContactForm save={addContact} />
                </div>

                {
                    contacts.length === 0 ? (
                        <div className='col'>
                            <strong>No Records To Display</strong>
                        </div>
                    ) : (
                        contacts.map(c => (
                            <div className='col-lg-3 col-md-6' key={c.id}>
                                {
                                    c.isEditable ?
                                        <ContactForm c={c} save={updateContact} cancelEdit={cancelEditable} /> :
                                        <ContactCard c={c} remove={remove} edit={markEditable} />
                                }
                            </div>
                        ))
                    )
                }
            </div>
        </section>
    );
}

export default ContactsList;