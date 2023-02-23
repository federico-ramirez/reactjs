import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login';
import Redirect from './pages/Redirect/Redirect';

import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Unauthorized from './pages/Unauthorized/Unauthorized';
import Users from './pages/Users/Users';
import Emergencies from './pages/Emergencies/Emergencies';
import Diseases from './pages/Diseases/Diseases';
import EmergencyCases from './pages/EmergencyCases/EmergencyCases';
import EmergencyTypes from './pages/EmergencyTypes/EmergencyTypes';
import Doctors from './pages/Doctors/Doctors';
import Firefighters from './pages/Firefighters/Firefighters';
import Police from './pages/Police/Police';
import BloodTypes from './pages/BloodTypes/BloodTypes';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/redirect" element={<Redirect />}/>
        <Route path="/dashboard" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/firefighters" element={<Firefighters />} />
        <Route path="/police" element={<Police />} />
        <Route path="/emergencies" element={<Emergencies />} />
        <Route path="/emergency-cases" element={<EmergencyCases />} />
        <Route path="/emergency-types" element={<EmergencyTypes />} />
        <Route path="/blood-types" element={<BloodTypes />} />
        <Route path="/diseases" element={<Diseases />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/403' element={<Unauthorized />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
