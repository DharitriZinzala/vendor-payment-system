import { Route, BrowserRouter as Router, Routes } from 'react-router';
import './App.css';
// import SignIn from './components/SignIn';
import LogIn from './components/LogIn';
import Dashboard from './components/dashboard';
// import Dashboard from './components/dashboard';

function App() {
  return (

    <Router>
      <div className='appdiv' style={{ display: "flex", width: "100%", height: "100%" }}>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/signup" element={<SignUp />} /> */}
          <Route path="/login" element={<LogIn />} />
        </Routes>

      </div>

    </Router>

  );
}

export default App;
