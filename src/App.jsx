import React from "react";
import CustomerProfile from "./components/CustomerProfile";
import CustomerSidebar from "./components/CustomerSidebar";
import TicketSuccessPage from "./components/TicketSuccessPage";
import CustomerNotifications from "./components/CustomerNotifications";
import CustomerNavbar from "./components/CustomerNavbar";
import BookingHistory from "./components/BookingHistory";


function App() {
  return (
    <div>
      <CustomerProfile />
      <CustomerSidebar />
      <CustomerNavbar/>
      <CustomerNotifications />
      <BookingHistory/>
      <TicketSuccessPage />
       
    </div>
  );
}

export default App;
