
const ContactCard = ({ c,remove,edit }) => (
    <div className='card m-0'>
        <div className='card-header'>Contact#{c.id}</div>
        <div className='card-body'>
            <div><strong>{c.fullName}</strong></div>
            <div>{c.mobile}</div>
            <div>{c.mailId}</div>
        </div>
        <div className='card-footer text-end'>
            <button type="button" className="btn btn-sm btn-primary me-2" onClick={e => edit(c.id)}>EDIT</button>
            <button type="button" className="btn btn-sm btn-danger" onClick={e => remove(c.id)} >DELETE</button>
        </div>
    </div>
);

export default ContactCard;