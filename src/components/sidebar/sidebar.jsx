import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ReceiptIcon from "@mui/icons-material/Receipt"; 
import { Link, useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const { logout } = useContext(AuthContext);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setShowConfirmation(true);
    console.log("Logout button clicked, showConfirmation set to true"); // Debug
  };

  const confirmLogout = () => {
    console.log("Confirming logout"); // Debug
    logout();
    setShowConfirmation(false);
    navigate("/login", { replace: true });
  };

  const cancelLogout = () => {
    console.log("Canceling logout"); // Debug
    setShowConfirmation(false);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <span className="logo">Booking Dashboard</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul className="sidebarMenu">
          <p className="title">MAIN</p>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <li className="menu-item">
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>

          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li className="menu-item">
              <PersonOutlineIcon className="icon" />
              <span>Quản lí tài khoản</span>
            </li>
          </Link>
          <Link to="/rooms" style={{ textDecoration: "none" }}>
            <li className="menu-item">
              <MeetingRoomIcon className="icon" />
              <span>Quản lí phòng</span>
            </li>
          </Link>

          <p className="title">USEFUL</p>
          <Link to="/services" style={{ textDecoration: "none" }}>
            <li className="menu-item">
              <MiscellaneousServicesIcon className="icon" />
              <span>Dịch vụ</span>
            </li>
          </Link>
          <Link to="/checkincheckout" style={{ textDecoration: "none" }}>
            <li className="menu-item">
              <RoomServiceIcon className="icon" />
              <span>Check-in / Check-out</span>
            </li>
          </Link>
          <Link to="/payment" style={{ textDecoration: "none" }}>
            <li className="menu-item">
              <CreditCardIcon className="icon" />
              <span>Thanh toán</span>
            </li>
          </Link>
          <Link to="/customer" style={{ textDecoration: "none" }}>
            <li className="menu-item">
              <CreditCardIcon className="icon" />
              <span>Khách hàng</span>
            </li>
          </Link>

          <p className="title">Thông báo</p>
          <Link to="/notification" style={{ textDecoration: "none" }}>
            <li className="menu-item">
              <NotificationsNoneIcon className="icon" />
              <span>Thông báo</span>
            </li>
          </Link>
          <Link to="/log" style={{ textDecoration: "none" }}>
            <li className="menu-item">
              <PsychologyOutlinedIcon className="icon" />
              <span>Logs</span>
            </li>
          </Link>
          <li className="menu-item">
            <SettingsApplicationsIcon className="icon" />
            <span>Cài đặt</span>
          </li>

          <p className="title">USER</p>
          <li className="menu-item" onClick={handleLogout}>
            <ExitToAppIcon className="icon" />
            <span>Đăng xuất</span>
          </li>

          {showConfirmation && (
            <>
              {console.log("Rendering modal")} {/* Debug */}
              <div className="modal-overlay">
                <div className="modal">
                  <p>Bạn có chắc chắn muốn đăng xuất?</p>
                  <div className="modal-buttons">
                    <button className="btn-accept" onClick={confirmLogout}>
                      Đồng ý
                    </button>
                    <button className="btn-denied" onClick={cancelLogout}>
                      Hủy
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;