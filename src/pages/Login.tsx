import React, {useState} from 'react';
import {AiOutlineLock, AiOutlineMail} from "react-icons/ai";
import {Link, useNavigate} from "react-router-dom";
import url from '../utils/url';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        // Clear any existing error message
        setErrorMessage('');

        try {
            // Make a POST request to the login URL
            const response = await fetch(`${url}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            });

            // Check if the request was successful
            if (response.ok) {
                const result = await response.json();
                if (result.code === 200) {
                    console.log(result.message); // Handle successful login
                    localStorage.setItem('token', result.data.token); // Store token in local storage
                    // Redirect to another page or show a success message
                    if (result.data.role == "RESTAURANT") {
                        navigate("/r/me")
                    } else {
                        navigate("/user")
                    }
                } else {
                    setErrorMessage(result.message || 'Login failed');
                }
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.message || 'Login failed');
            }
        } catch (error) {
            setErrorMessage('An error occurred. Please try again.');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-[790px] bg-gradient-to-b from-amber-200 to-white">
            <div
                className="flex flex-col border-gray-500/25 border items-center p-6 py-8 rounded-lg w-[550px] bg-white shadow-lg">
                <div className={`w-full mb-10`}>
                    <h2 className="text-2xl text-left w-full font-bold">Login</h2>
                    <p className={`text-gray-500 text-sm`}>Login and order food from the comfort of your house.</p>
                </div>
                <div className="flex border-gray-500/50 border items-center p-2 py-1.5 rounded-lg w-full mb-4">
                    <AiOutlineMail size="1.5em" className="text-gray-800 mr-2"/>
                    <input
                        type="email"
                        placeholder="Email"
                        className="outline-none bg-transparent flex-grow"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="flex border-gray-500/50 border items-center p-2 py-1.5 rounded-lg w-full mb-10">
                    <AiOutlineLock size="1.5em" className="text-gray-800 mr-2"/>
                    <input
                        type="password"
                        placeholder="Password"
                        className="outline-none bg-transparent flex-grow"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {errorMessage && (
                    <div className="text-red-500 mb-4">
                        {errorMessage}
                    </div>
                )}
                <button
                    onClick={handleLogin}
                    className="w-full flex items-center justify-center gap-3 font-semibold bg-amber-400 h-full rounded-lg py-2 mb-4"
                >
                    Login
                </button>
                <div className={`font-medium`}>Don't have an account?
                    <Link to="/signup" className="text-amber-600 font-semibold"> Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
