import { useState } from 'react';

const ContactForm = ({ c, save, cancelEdit }) => {

    let [id, setId] = useState(c ? c.id : 0);
    let [fullName, setFullName] = useState(c ? c.fullName : "");
    let [mobile, setMobile] = useState(c ? c.mobile : "");
    let [mailId, setMailId] = useState(c ? c.mailId : "");

    const formSubmitted = e => {
        e.preventDefault();

        let c = { id, fullName, mobile, mailId };
        save(c);
        setId(0);
        setFullName("");
        setMailId("");
        setMobile("");
    };

    const formReset = e => {
        if (c && c.isEditable) {
            cancelEdit(id);
        } else {
            setId(0);
            setFullName("");
            setMailId("");
            setMobile("");
        }
    };

    return (
        <form className='card m-0' onSubmit={formSubmitted}>
            <div className='card-header'> {c && c.isEditable ? "Contact#" + c.id : "New Contact" } </div>
            <div className='card-body'>
                <div>
                    <input type="text" className='form-control' value={fullName}
                        placeholder='Full Name' onChange={e => setFullName(e.target.value) } />
                </div>
                <div>
                    <input type="text" className='form-control' value={mobile}
                        placeholder='Mobile' onChange={e => setMobile(e.target.value )} />
                </div>
                <div>
                    <input type="text" className='form-control' value={mailId}
                        placeholder='Mail Id' onChange={e => setMailId(e.target.value)} />
                </div>
            </div>
            <div className='card-footer text-end'>
                <button type="submit" className="btn btn-sm btn-primary me-2">SAVE</button>
                <button type="button" className="btn btn-sm btn-danger" onClick={formReset} >CANCEL</button>
            </div>
        </form>
    )
}

export default ContactForm;