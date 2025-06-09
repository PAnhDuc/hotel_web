import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaCalendarAlt, FaHome, FaSearch, FaUser, FaSignOutAlt } from 'react-icons/fa';

const Header = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();

  // Lấy thông tin người dùng từ localStorage khi load trang
  useEffect(() => {
    const userData = localStorage.getItem('user');
    setCurrentUser(userData);
  }, []);

  // Đăng xuất
  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('user');
    setShowLogout(false);
  };

  // Xử lý khi bấm nút đăng nhập/quản trị
  const handleMainButton = () => {
    if (currentUser) {
      navigate('/admin');
    } else {
      alert('Vui lòng đăng nhập để tiếp tục!');
    }
  };

  return (
    <header className="bg-gradient-to-r from-white to-blue-50 px-6 py-10">
      {/* Thanh điều hướng */}
      <nav className="flex justify-between items-center max-w-7xl mx-auto mb-12">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">Dwello</div>

        {/* Danh mục điều hướng */}
        <ul className="flex gap-10 text-base font-medium text-gray-700">
          <li className="hover:text-blue-600 cursor-pointer">
            <a href="#header">Trang chủ</a>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <a href="#hotellist">Dịch vụ</a>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <a href="#introsection">Blog</a>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <a href="#footer">Liên hệ</a>
          </li>
        </ul>

        {/* Nút đăng ký hoặc tên người dùng */}
        <div>
          {currentUser ? (
            <div className="bg-gradient-to-r from-blue-100 to-white p-2 rounded-lg shadow-md flex items-center space-x-2">
              <FaUser className="text-blue-600" />
              <span className="text-gray-700 font-medium">{currentUser}</span>
              <button
                className="ml-2 text-red-500 hover:text-red-700"
                title="Đăng xuất"
                onClick={() => setShowLogout(true)}
              >
                <FaSignOutAlt size={18} />
              </button>
            </div>
          ) : (
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
              onClick={handleMainButton}
            >
              Đăng nhập
            </button>
          )}
        </div>
      </nav>

      {/* Modal xác nhận đăng xuất */}
      {showLogout && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-lg shadow-xl p-8 min-w-[320px] flex flex-col items-center">
            <p className="mb-6 text-lg font-medium text-gray-800">Bạn có muốn đăng xuất?</p>
            <div className="flex gap-4">
              <button
                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
                onClick={handleLogout}
              >
                Đồng ý
              </button>
              <button
                className="bg-gray-300 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-400"
                onClick={() => setShowLogout(false)}
              >
                Hủy
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Nội dung chính */}
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
        {/* Bên trái */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">Tìm khách sạn</h1>
          <p className="text-base text-gray-600 max-w-md">
            Tận hưởng trải nghiệm lưu trú tuyệt vời tại các khách sạn hàng đầu được tuyển chọn kỹ lưỡng cho bạn.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-lg w-fit">
            Đặt ngay
          </button>
        </div>

        {/* Bên phải (ảnh) */}
        <div className="flex justify-center">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5aadf482aa49a1d810879b88/1626698419120-J7CH9BPMB2YI728SLFPN/1.jpg"
            alt="Hotel"
            className="rounded-2xl shadow-xl w-full max-w-[550px] object-cover"
          />
        </div>
      </div>

      {/* Thanh tìm kiếm */}
      <div className="bg-white shadow-lg rounded-full px-6 py-4 mt-12 flex items-center justify-between gap-6 max-w-6xl mx-auto">
        <div className="flex flex-col text-sm">
          <label className="flex items-center gap-2"><FaMapMarkerAlt /> Địa điểm</label>
          <input type="text" placeholder="Bạn muốn đi đâu" className="text-xs text-gray-600 outline-none" />
        </div>

        <div className="flex flex-col text-sm">
          <label className="flex items-center gap-2"><FaCalendarAlt /> Check in</label>
          <input type="date" className="text-xs text-gray-600 outline-none" />
        </div>

        <div className="flex flex-col text-sm">
          <label className="flex items-center gap-2"><FaCalendarAlt /> Check out</label>
          <input type="date" className="text-xs text-gray-600 outline-none" />
        </div>

        <div className="flex flex-col text-sm">
          <label className="flex items-center gap-2"><FaHome /> Thể loại</label>
          <input type="text" placeholder="Add type" className="text-xs text-gray-600 outline-none" />
        </div>

        <button className="bg-blue-600 text-white p-3 rounded-full">
          <FaSearch />
        </button>
      </div>
    </header>
  );
};

export default Header;