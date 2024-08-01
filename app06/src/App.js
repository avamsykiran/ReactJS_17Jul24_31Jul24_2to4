import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './uis/Header';
import ContactsList from './uis/ContactsList';
import AboutUs from './uis/AboutUs';

const App = () => (
  <Router>
    <Header appName="Address Book 4.0" />
    <div className='container-fluid p-4'>

      <Routes>
        <Route path='/' element={<ContactsList />} />
        <Route path='/about' element={<AboutUs />} />
      </Routes>

    </div>
  </Router>
);

export default App;
