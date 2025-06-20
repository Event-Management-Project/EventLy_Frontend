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
import OrganiserEventDetailsPage from "./components/OrganiserEventDetailsPage";



function App() {
  return (
    <div>
      <CustomerProfile />
      <CustomerSidebar />
      <CustomerNavbar/>
      <CustomerNotifications />
      <BookingHistory/>
      <TicketSuccessPage />
      <CustomerEventList/>
      <CustomerEventFilters/>
      <CustomerEventDetailsPage/>
      <OrganiserEventList/>
      <OrganiserEventFilters/>
      <OrganiserEventDetailsPage/>
       
    </div>
  );
}

export default App;
