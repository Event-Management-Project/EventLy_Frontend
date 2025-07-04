import React from "react";
import CustomerProfile from "./components/Customer/CustomerProfile"
import CustomerSidebar from "./components/Customer/CustomerSidebar";
import CustomerHome from "./components/Customer/CustomerHome";
import TicketSuccessPage from "./components/Events/TicketSuccessPage";
import CustomerNotifications from "./components/Customer/CustomerNotifications";
import CustomerNavbar from "./components/Customer/CustomerNavbar";
import BookingHistory from "./components/Events/BookingHistory";
import CustomerEventList from "./components/Customer/CustomerEventList";
import CustomerEventFilters from "./components/Customer/CustomerEventFilters";
import CustomerEventDetailsPage from "./components/Customer/CustomerEventDetailsPage";
import OrganiserEventList from "./components/Organiser/OrganiserEventList";
import OrganiserEventFilters from "./components/Organiser/OrganiserEventFilters";
import BookingForm from "./components/Events/BookingForm";
import Login from "./pages/Login";
import AttendeeList from "./components/Events/AttendeeList";
import Register from "./pages/Register";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import CustomerEventCard from "./components/Customer/CustomerEventCard";
import OrganiserEventCard from "./components/Organiser/OrganiserEventCard";
import OrganiserProfile from "./components/Organiser/OrganiserProfile";
import OrganiserNavbar from "./components/Organiser/OrganiserNavbar";
import OrganiserNotifications from "./components/Organiser/OrganiserNotifications";
import OrganiserSidebar from "./components/Organiser/OrganiserSidebar";
import OrganiserDashboard from "./components/Organiser/OrganiserDashboard";
import AddEvent from "./components/Events/AddEvent";
import EditEvent from "./components/Events/EditEvent";
import AddEventFacilities from "./components/Events/AddEventFacilities";
import NotificationModal from "./pages/NotificationModal";
import OrganiserFooter from "./components/Organiser/OrganiserFooter";
import OrganiserLayout from "./components/Organiser/OrganiserLayout";

function App() {
  return (
<div>
      {/* Rusikesh */}
      <OrganiserLayout />
      {/* <OrganiserNavbar />   */}
      <OrganiserProfile />
      {/* <OrganiserSidebar /> */}
      <OrganiserFooter /> 
      <OrganiserNotifications />
      <OrganiserDashboard />
      <AddEvent />
      <EditEvent />
      <AddEventFacilities />
     
      {/* Sourabh */}
      {/* <NotificationModal/> */}
      <CustomerProfile />
      <CustomerSidebar />
      <CustomerNavbar />
      <CustomerNotifications />
      <BookingHistory />
      <TicketSuccessPage />
     
      {/* SHubham */}
      <CustomerEventList />
      <CustomerEventDetailsPage />
      <OrganiserEventList />
      
      {/* farhan */}
      <BookingForm />
      <AttendeeList />
      <AboutUs />
      <Login />
      <Register />
      <ContactUs />
    </div>
  );
}
export default App;
