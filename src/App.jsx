import React from "react";
import CustomerProfile from "./components/CustomerProfile";
import CustomerSidebar from "./components/CustomerSidebar";
import TicketSuccessPage from "./components/TicketSuccessPage";
import CustomerNotifications from "./components/CustomerNotifications";
import CustomerNavbar from "./components/CustomerNavbar";
import BookingHistory from "./components/BookingHistory";
import CustomerEventList from "./components/CustomerEventList";
import CustomerEventFilters from "./components/CustomerEventFilters";
import CustomerEventDetailsPage from "./components/CustomerEventDetailsPage";
import OrganiserEventList from "./components/OrganiserEventList";
import OrganiserEventFilters from "./components/OrganiserEventFilters";
import BookingForm from "./components/BookingForm";
import Login from "./components/Login";
import AttendeeList from "./components/AttendeeList";
import Register from "./components/Register";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import CustomerEventCard from "./components/CustomerEventCard";
import OrganiserEventCard from "./components/OrganiserEventCard";
import OrganiserProfile from "./components/OrganiserProfile";
import OrganiserNavbar from "./components/OrganiserNavbar"
import OrganiserNotifications from "./components/OrganiserNotifications";
import OrganiserSidebar from './components/OrganiserSidebar';
import OrganiserDashboard from "./components/OrganiserDashboard";
import AddEvent from "./components/AddEvent";
import EditEvent from "./components/EditEvent";
import AddEventFacilities from "./components/AddEventFacilities";

function App() {
  return (
    <div>

        <OrganiserNavbar />
        <OrganiserProfile />
        <OrganiserSidebar />
        <OrganiserNotifications /> 

        <OrganiserDashboard />
        <AddEvent /> 
       <EditEvent /> 
       <AddEventFacilities /> 

      {/* <CustomerProfile />
      <CustomerSidebar />
      <CustomerNavbar/>
      <CustomerNotifications />
      <BookingHistory/>
      <TicketSuccessPage />
      <CustomerEventList/>
       <CustomerEventList/>
      <CustomerEventFilters/>
      <CustomerEventDetailsPage/>
      <OrganiserEventList/>
      <OrganiserEventFilters/>
      <BookingForm/>
      <AttendeeList/> 
      <AboutUs/> 
      <Login/> 
      <Register/>
      <ContactUs/>
      <CustomerEventCard/>
      <OrganiserEventCard/> */}
       
    </div>
  );
}

export default App;
