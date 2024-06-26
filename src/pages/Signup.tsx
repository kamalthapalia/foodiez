import {useState} from 'react';
import {AiOutlineLock, AiOutlineMail, AiOutlineUser, AiOutlinePhone} from "react-icons/ai";
import {Link, useNavigate} from "react-router-dom";
import url from '../utils/url';


interface ResponseData {
    code: number;
    message: string;
    data: {
        token: string;
        email: string;
    };
}

const SignupPage = () => {
    // State variables to store user input
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate()

    const handleSignup = async () => {
        // Clear any existing error message
        setErrorMessage('');

        // Construct the user data
        const userData = {
            fullName,
            email,
            password,
            phone
        };

        try {
            // Make a POST request to the signup URL
            const response = await fetch(`${url}/signup/user`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            // Parse the response data as ResponseData
            const data: ResponseData = await response.json();

            // Check if the request was successful
            if (response.ok) {
                // Handle successful signup (e.g., navigate to a different page, show a success message, etc.)
                navigate("/r/me")
                localStorage.setItem("token", data.data.token)
            } else {
                // Handle errors returned by the server
                setErrorMessage(data.message || 'Signup failed');
            }
        } catch (error) {
            // Handle network or other errors
            setErrorMessage('An error occurred. Please try again.');
        }

    };

    return (
        <div className="flex justify-center items-center min-h-[890px] bg-gradient-to-b from-amber-200 to-white">
            <div className="flex flex-col items-center p-6 py-8 rounded-lg w-[550px] bg-white shadow-lg">
                <div className="w-full mb-10">
                    <h2 className="text-2xl text-left w-full font-bold">Sign Up</h2>
                    <p className="text-gray-500 text-sm">Signup and order food from the comfort of your house.</p>
                </div>
                <div className="flex border-gray-500/50 border items-center p-2 py-1.5 rounded-lg w-full mb-4">
                    <AiOutlineUser size="1.5em" className="text-gray-800 mr-2"/>
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="outline-none bg-transparent flex-grow"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
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
                <div className="flex border-gray-500/50 border items-center p-2 py-1.5 rounded-lg w-full mb-4">
                    <AiOutlineLock size="1.5em" className="text-gray-800 mr-2"/>
                    <input
                        type="password"
                        placeholder="Password"
                        className="outline-none bg-transparent flex-grow"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="flex border-gray-500/50 border items-center p-2 py-1.5 rounded-lg w-full mb-4">
                    <AiOutlinePhone size="1.5em" className="text-gray-800 mr-2"/>
                    <input
                        type="text"
                        placeholder="Phone"
                        className="outline-none bg-transparent flex-grow"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                {errorMessage && (
                    <div className="text-red-500 mb-4">
                        {errorMessage}
                    </div>
                )}
                <button
                    onClick={handleSignup}
                    className="w-full flex mt-10 items-center justify-center gap-3 font-semibold bg-amber-400 h-full rounded-lg py-2 mb-4"
                >
                    Sign Up
                </button>
                <div className="font-medium">Already have an account?
                    <Link to="/login" className="text-amber-600 font-semibold"> Login</Link>
                </div>
                <Link className="w-full" to="/signup/restaurant">
                    <button
                        className="w-full flex mt-10 items-center justify-center gap-3 font-semibold border-amber-400 border-2 hover:bg-amber-100 transition h-full rounded-lg py-1.5 mb-4"
                    >
                        Register a Restaurant
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default SignupPage;
