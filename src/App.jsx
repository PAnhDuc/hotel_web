import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './components/Login.jsx';
import { Register } from './components/Register.jsx';
import Home from "./pages/home/home.jsx";
import DashboardAdmin from "./pages/dashboard-admin/dashboard-admin.jsx";
import Single from "./pages/single/single.jsx";
import New from "./pages/new/new.jsx";
import { NotificationInputs, productInputs, userInputs } from "./formSource.js";
import Payment from "./pages/payment/payment.jsx";
import Services from "./pages/service/services.jsx";
import Rooms from "./pages/rooms/rooms.jsx";
import Log from "./pages/log/log.jsx";
import Sidebar from "./components/sidebar/sidebar.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import "./style/style.scss";
import CheckinCheckout from "./pages/checkincheckout/checkincheckout.jsx";
import Notification from "./pages/notification/notification.jsx";
import Users from "./pages/users/users.jsx";
import { LogProvider } from "./logContext.js";

function App() {
  return (
    <LogProvider>
      <BrowserRouter>
        <Routes>

          {/* Trang chính */}
          <Route path="/admin" element={<DashboardAdmin />} />
          {/* Trang đăng nhập, đăng ký */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />

          {/* Trang dịch vụ và checkincheckout */}
          <Route path="/services" element={<Services />} />
          <Route path="/checkincheckout" element={<CheckinCheckout />} />

          {/* Navbar, Sidebar */}
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/navbar" element={<Navbar />} />

          {/* Trang chính */}
          <Route path="/home" element={<Home />} />

          {/* Users */}
          <Route path="/users" element={<Users />} />
          <Route path="/users/:userId" element={<Single />} />
          <Route path="/newUser" element={<New inputs={userInputs} title="Add New User" />} />


          {/* Rooms */}
          <Route path="/rooms" element={<Rooms />} />
          {/* <Route path="/rooms/new" element={<Rooms />} /> */} {/* XÓA hoặc COMMENT dòng này */}
          <Route path="/rooms/:roomId" element={<Single />} />

          {/* Notification */}
          <Route path="/notification" element={<Notification />} />
          <Route path="/notification/:notificationId" element={<Single />} />
          <Route path="/newNotification" element={<New inputs={NotificationInputs} title="Add New Notification" />} />

          {/* Logs */}
          <Route path="/log" element={<Log />} />
          <Route path="/log/:logId" element={<Single />} />
          <Route path="/newLog" element={<New inputs={productInputs} title="Add New Log" />} />

          {/* Payment */}
          <Route path="/payment" element={<Payment />} />
          <Route path="/newPayment" element={<New inputs={productInputs} title="Add New Payment" />} />

          {/* Wildcard route */}
          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </LogProvider>
  );
}

export default App;