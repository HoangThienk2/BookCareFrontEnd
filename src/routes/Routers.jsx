import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Services from "../pages/Services";
import Signup from "../pages/Signup";
import Doctor from "../pages/Doctors/Doctor";
import DoctorDetails from "../pages/Doctors/DoctorDetails";

import { Routes, Route } from 'react-router-dom'
import Home_admin from "../pages/DoctorMangement/Home_admin";
import Dashboard from "../pages/DoctorMangement/dashbroad";

import Appointment from "../pages/DoctorMangement/Appointment/Appointment";
import DoctorAppointmentManagement from "../pages/DoctorMangement/Appointment/DoctorAppointmentManagement";

import Patients from "../pages/DoctorMangement/Patient/Patients";
import PatientManagement from "../pages/DoctorMangement/Patient/PatientManagement";
import Patient_add from "../pages/DoctorMangement/Patient/Patient_add";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/dashboards.1.1.0.min.css";
const Routers = () => {
  return (
    <Routes>
      {/* User route */}
     
   <Route>
   <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors" element={<Doctor />} />
      <Route path="/doctors/:id" element={<DoctorDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
   </Route>

   {/* Doctor route */}
   <Route path="/doctor-dashboard" element=
          // {
          //   <PrivateRouter>
          //     {<Home_admin />}
          //   </PrivateRouter>
          // }
          {<Home_admin />}
        >
          <Route index element={<Dashboard />}></Route>
        
          <Route path="appointments" element={<Appointment />}>
            <Route index element={<DoctorAppointmentManagement />}></Route>
          </Route>

         

          <Route path="patients" element={<Patients />}>
            <Route index element={<PatientManagement />}></Route>
            <Route path="new" element={<Patient_add />}></Route>
          </Route>


        </Route>
    </Routes>
  )
}

export default Routers