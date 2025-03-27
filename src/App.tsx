import { Route, BrowserRouter as Router, Routes } from 'react-router';
import './App.css';
import SignIn from './components/SignIn';
import LogIn from './components/LogIn';
import Dashboard from './components/dashboard';
import Sidebar from './components/sidebar';
import Vendor from './components/Vendor';


function App() {
  return (

    <Router>
      <div className='appdiv' style={{ display: "flex", width: "100%", height: "100%" }}>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/vendor-details" element={<><Sidebar /> <Vendor /></>} />
        </Routes>

      </div>

    </Router>

  );
}

export default App;
