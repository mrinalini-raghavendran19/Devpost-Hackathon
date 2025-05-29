// import logo from './logo.svg';
// import './App.css';
// import Signup from './users/Signup';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NavBar from './NavBar';
// import Login from './users/Login';
// import Layout from './Layout';
// import Dashboard from './AI/Dashboard';

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route exact path = "/" element={<NavBar/>}/>
//           <Route exact path = "/signup" element = {<Signup/>}/>
//           <Route exact path = "/login" element = {<Login/>}/>
//           <Route exact path ='/layout' element = {<Layout/>}/>
//           <Route exact path = '/dashboard' element = {<Dashboard/>} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

import './App.css';
import Signup from './users/Signup';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Login from './users/Login';
import Layout from './Layout';
import Dashboard from './AI/Dashboard';
import { AuthProvider, useAuth } from './authentication/AuthContext'; // path as per your folder structure
import Homepage from './Homepage';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <AppRoutes />
        </Router>
      </AuthProvider>
    </div>
  );
}

// Component to conditionally render routes/layout
const AppRoutes = () => {
  const { isAuthenticated } = useAuth();
  console.log("is atheh?",isAuthenticated);

  return (
    <>
      {isAuthenticated && <NavBar />}

      <Routes>
        <Route  path="/" element={<Homepage/>} />
        <Route  path="/signup" element={<Signup />} />
        <Route  path="/login" element={<Login />} />
        {isAuthenticated && <Route  path="/layout" element={<Layout />} />}
        {isAuthenticated && <Route  path="/dashboard" element={<Dashboard />} />}
      </Routes>
    </>
  );
};

export default App;

