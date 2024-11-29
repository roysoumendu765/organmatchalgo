import './App.css';
import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import Header from './components/Header/Header';
import AuthPage from './components/Auth/AuthPage';
import Footer from './components/Footer/Footer';
import Home from '../src/pages/Home/Home';
import AdminPage from './components/AdminPage/AdminPage';
import Contact from '../src/pages/Contact/Contact';
import Dashboard from './components/DashBoard/DashBoard';
import AdminDashBoard from './components/AdminDashBoard/AdminDashBoard';
import About from './components/About/About';
import Donate from './components/Donate/Donate';
import MatchCard from './components/MatchCard/MatchCard';
import OrganForm from './components/OrganForm/OrganForm';
import MatchResults from './components/MatchResults/MatchResults';
import RecipientForm from './components/RecipientForm/RecipientForm';

function App() {
  // const [isAllowed, setIsAllowed] = useState(false);
  // const location = useLocation();

  // const handleChange = () => {
  //   setIsAllowed(true);
  // }

  // useEffect(() => {
  //   const handleBeforeLoad = (e) => {
  //     if(isAllowed){
  //       e.preventDefault();
  //       e.returnValue = '';
  //     }
  //   };

  //   const handlePopState = (e) => {
  //     window.history.pushState(null, "", window.location.href);
  //   }

  //   window.addEventListener("beforeunload", handleBeforeUnload);
  //   window.addEventListener("popstate", handlePopState);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //     window.removeEventListener("popstate", handlePopState);
  //   };
  // },[isAllowed])

  // const allowedRoutes = ['/','/contact'];
  // const allowedRouting = allowedRoutes.includes(location.pathname);

  return (
    <div className="App">
      <Router>
        <Header/>
          <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/auth" element={<AuthPage/>} />
             <Route path="/admin" element={<AdminPage />} />
             <Route path="/contact" element={<Contact/>} />
             <Route path="/dashboard" element={<Dashboard/>} />
             <Route path="/admindashboard" element={<AdminDashBoard/>} />
             <Route path="/about" element={<About/>} />
             <Route path="/donate" element={<Donate/>} />
             <Route path="/organ-form" element={<OrganForm/>} />
             <Route path="/recipient-form" element={<RecipientForm/>}/>
             <Route path="/match-card" element={<MatchCard/>}/>
             <Route path="/match-results" element={<MatchResults/>}/>
          </Routes>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
