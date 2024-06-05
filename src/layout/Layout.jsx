import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Routers from '../routes/Routers';

const Layout = () => {
  const location = useLocation();
  
  const isDoctorDashboard = location.pathname.startsWith('/doctor-dashboard');

  return (
    <>
      {!isDoctorDashboard && <Header />}
      <main>
        <Routers />
      </main>
      {!isDoctorDashboard && <Footer />}
    </>
  );
}

export default Layout;
