import { Fragment } from 'react';
import Header from './uis/Header';
import ContactsList from './uis/ContactsList';

const App = () => (
  <Fragment>
    <Header appName="Address Book 2.0" />
    <div className='container-fluid p-4'>
      <ContactsList />
    </div>
  </Fragment>
);

export default App;
