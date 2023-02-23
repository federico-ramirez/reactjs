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
        <Route path="/dashboard" element={<PrivateRoute role="admin"><Home /></PrivateRoute>} />
        <Route path="/users" element={<PrivateRoute role="admin"><Users /></PrivateRoute>} />
        <Route path="/doctors" element={<PrivateRoute role="admin"><Doctors /></PrivateRoute>} />
        <Route path="/firefighters" element={<PrivateRoute role="admin"><Firefighters /></PrivateRoute>} />
        <Route path="/police" element={<PrivateRoute role="admin"><Police /></PrivateRoute>} />
        <Route path="/emergencies" element={<PrivateRoute role="admin"><Emergencies /></PrivateRoute>} />
        <Route path="/emergency-cases" element={<PrivateRoute role="admin"><EmergencyCases /></PrivateRoute>} />
        <Route path="/emergency-types" element={<PrivateRoute role="admin"><EmergencyTypes /></PrivateRoute>} />
        <Route path="/blood-types" element={<PrivateRoute role="admin"><BloodTypes /></PrivateRoute>} />
        <Route path="/diseases" element={<PrivateRoute role="admin"><Diseases /></PrivateRoute>} />
        <Route path='*' element={<NotFound />} />
        <Route path='/403' element={<Unauthorized />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
