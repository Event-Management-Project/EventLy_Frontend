import React from "react";
import CustomerProfile from "./components/Customer/CustomerProfile";
import CustomerSidebar from "./components/Customer/CustomerSidebar";
import CustomerHome from "./components/Customer/CustomerHome";
import TicketSuccessPage from "./components/Events/TicketSuccessPage";
import BookingHistory from "./components/Events/BookingHistory";
import CustomerEventList from "./components/Customer/CustomerEventList";
import OrganiserEventList from "./components/Organiser/OrganiserEventList";
import BookingForm from "./components/Events/BookingForm";
import Login from "./pages/Login";
import AttendeeList from "./components/Events/AttendeeList";
import Register from "./pages/Register";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OrganiserProfile from "./components/Organiser/OrganiserProfile";
import OrganiserNotifications from "./components/Organiser/OrganiserNotifications";
import OrganiserDashboard from "./components/Organiser/OrganiserDashboard";
import AddEvent from "./components/Events/AddEvent";
import EditEvent from "./components/Events/EditEvent";
import AddEventFacilities from "./components/Events/AddEventFacilities";
import OrganiserLayout from "./components/Organiser/OrganiserLayout";
import PaymentPage from "./components/Events/PaymentPage";
import AddCategory from "./components/Events/AddCategory";
import { Route, Routes } from "react-router-dom";
import CustomerLayout from "./components/Customer/CustomerLayout";
import EventDetailsPage from "./components/Customer/CustomerEventDetailsPage";
import OrganiserBookings from './components/Events/BookingForm';
import OrganiserReviews from "./components/Organiser/OrganiserReview";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/customer" element={<CustomerLayout />}>
        <Route index element={<CustomerHome />} />
        <Route path="events" element={<CustomerEventList />} />
        <Route path="events/:eventId/description" element={<EventDetailsPage />} />
        <Route path="events/:eventId/book" element={<BookingForm />} />
        <Route path="events/:eventId/payment" element={<PaymentPage />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="events/:eventId/success" element={<TicketSuccessPage />} />
        <Route path="bookings/:customerId" element={<BookingHistory />} />
        <Route path="profile" element={<CustomerProfile />} />
      </Route>


      <Route path="/organiser" element={<OrganiserLayout />}>
        <Route index element={<OrganiserDashboard />} />
        <Route path="notifications" element={<OrganiserNotifications />} />
        <Route path="events" element={<OrganiserEventList />} />
        <Route path="events/add" element={<AddEvent />} />
        <Route path="events/:eventId/edit" element={<EditEvent />} />
        <Route path="events/add-facilities" element={<AddEventFacilities />} />
        <Route path="events/add-category" element={<AddCategory />} />
        <Route path="bookings" element={<AttendeeList />} />
        <Route path="reviews" element={<OrganiserReviews />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="profile" element={<OrganiserProfile />} />
      </Route>


    </Routes>
  );
}
export default App;
