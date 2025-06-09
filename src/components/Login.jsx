import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../assets/css/style.css';
import instance from '../API/axios'; // Thêm dòng này

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;

    // Nếu có state từ Register, tự động điền username và password
    useEffect(() => {
        if (state && state.username && state.password) {
            setUsername(state.username);
            setPassword(state.password);
        }
        const currentPath = window.location.pathname;
        if (currentPath === '/login' && localStorage.getItem('token') !== null) {
            navigate('/');
        }
    }, [navigate, state]);

    const login = async (e) => {
        e.preventDefault();
        setError('');

        // Validate all required fields
        if (!username || !password) {
            setError('Vui lòng điền đầy đủ thông tin.');
            return;
        }

        // Validate password length (minimum 6 characters)
        if (password.length < 6) {
            setError('Mật khẩu phải có ít nhất 6 ký tự.');
            return;
        }

        const payload = {
            username,
            password
        };
        console.log('Payload:', payload);

        try {
            const response = await instance.post('/login', payload);
            const data = response.data;

            // Lưu token và thông tin user vào localStorage
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));

            // Điều hướng đến trang admin sau khi đăng nhập thành công
            navigate('/admin');
        } catch (err) {
            setError(err.response?.data?.error || err.message || 'Login failed');
            console.error('Login error:', err);
        }
    };

    return (
        <div className="container">
            <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="pt-4 pb-2">
                                        <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                                        <p className="text-center small">Enter your username & password to login</p>
                                    </div>
                                    <form className="row g-3 needs-validation" onSubmit={login}>
                                        <div className="col-12">
                                            <label htmlFor="username" className="form-label">Username</label>
                                            <div className="input-group has-validation">
                                                <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" id="username" required />
                                                <div className="invalid-feedback">Please enter your username.</div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="password" className="form-label">Password</label>
                                            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" required />
                                            <div className="invalid-feedback">Please enter your password!</div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe" />
                                                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100" type="submit">Login</button>
                                        </div>
                                        <div className="col-12">
                                            <p className="small mb-0 text-center">
                                                Don't have account?{' '}
                                                <Link to="/register" onClick={() => console.log('Clicked Create an account')}>
                                                    Create an account
                                                </Link>
                                            </p>
                                        </div>
                                    </form>
                                    {error && <p className="text-danger text-center">{error}</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};