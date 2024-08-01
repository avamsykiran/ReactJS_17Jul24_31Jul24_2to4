import { useSelector } from 'react-redux';
import ContactCard from './ContactCard';
import ContactForm from './ContactForm';

const ContactsList = () => {

    let contacts = useSelector( state => state.contacts );

    return (
        <section className='col-10 p-2 mx-auto'>
            <h4> Contacts List </h4>
            <div className='row g-3'>

                <div className='col-lg-3 col-md-6'>
                    <ContactForm />
                </div>

                {
                    contacts.length === 0 ? (
                        <div className='col'>
                            <strong>No Records To Display</strong>
                        </div>
                    ) : (
                        contacts.map(c => (
                            <div className='col-lg-3 col-md-6' key={c.id}>
                                { c.isEditable ? <ContactForm c={c} /> : <ContactCard c={c} /> }
                            </div>
                        ))
                    )
                }
            </div>
        </section>
    );
}

export default ContactsList;