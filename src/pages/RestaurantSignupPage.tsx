import React, {useState} from 'react';
import {
    AiOutlineLock,
    AiOutlineMail,
    AiOutlineUser,
    AiOutlinePhone,
    AiOutlineHome,
    AiOutlineCalendar
} from "react-icons/ai";
import {Link, useNavigate} from "react-router-dom";
import url from '../utils/url';

interface RestaurantData {
    fullName: string;
    email: string;
    password: string;
    address: string;
    phone: string;
    description: string;
    openTime: string;
}

const RestaurantSignupPage: React.FC = () => {
    const [restaurantData, setRestaurantData] = useState<RestaurantData>({
        fullName: '',
        email: '',
        password: '',
        address: '',
        phone: '',
        description: '',
        openTime: ''
    });
    const [errorMessage, setErrorMessage] = useState<string>('');
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setRestaurantData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSignup = async () => {
        // Clear any existing error message
        setErrorMessage('');

        try {
            // Make a POST request to the signup URL
            const response = await fetch(`${url}/signup/restaurant`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(restaurantData)
            });

            if (response.ok) {
                const result = await response.json();
                if (result.code === 201) {
                    console.log(result.message); // Handle successful signup
                    localStorage.setItem('token', result.data.token); // Store token in local storage
                    // Redirect to another page or show a success message
                    navigate('/r/me'); // Adjust the path as needed
                } else {
                    setErrorMessage(result.message || 'Signup failed');
                }
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.message || 'Signup failed');
            }
        } catch (error) {
            setErrorMessage('An error occurred. Please try again.');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-[890px] bg-gradient-to-b from-amber-200 to-white">
            <div
                className="flex flex-col border-gray-500/25 border items-center p-6 py-8 rounded-lg w-[550px] bg-white shadow-lg">
                <h2 className="text-2xl text-left w-full font-bold mb-10">Sign Up</h2>
                <div className="flex border-gray-500/50 border items-center p-2 py-1.5 rounded-lg w-full mb-4">
                    <AiOutlineUser size="1.5em" className="text-gray-800 mr-2"/>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        className="outline-none bg-transparent flex-grow"
                        value={restaurantData.fullName}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex border-gray-500/50 border items-center p-2 py-1.5 rounded-lg w-full mb-4">
                    <AiOutlineMail size="1.5em" className="text-gray-800 mr-2"/>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="outline-none bg-transparent flex-grow"
                        value={restaurantData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex border-gray-500/50 border items-center p-2 py-1.5 rounded-lg w-full mb-4">
                    <AiOutlineLock size="1.5em" className="text-gray-800 mr-2"/>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="outline-none bg-transparent flex-grow"
                        value={restaurantData.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex border-gray-500/50 border items-center p-2 py-1.5 rounded-lg w-full mb-4">
                    <AiOutlineHome size="1.5em" className="text-gray-800 mr-2"/>
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        className="outline-none bg-transparent flex-grow"
                        value={restaurantData.address}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex border-gray-500/50 border items-center p-2 py-1.5 rounded-lg w-full mb-4">
                    <AiOutlinePhone size="1.5em" className="text-gray-800 mr-2"/>
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        className="outline-none bg-transparent flex-grow"
                        value={restaurantData.phone}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex border-gray-500/50 border items-center p-2 py-1.5 rounded-lg w-full mb-4">
                    <AiOutlineCalendar size="1.5em" className="text-gray-800 mr-2"/>
                    <input
                        type="text"
                        name="openTime"
                        placeholder="Open Time"
                        className="outline-none bg-transparent flex-grow"
                        value={restaurantData.openTime}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex border-gray-500/50 border items-center p-2 py-1.5 rounded-lg w-full mb-4">
                    <textarea
                        name="description"
                        placeholder="Description"
                        className="outline-none bg-transparent flex-grow"
                        value={restaurantData.description}
                        onChange={handleChange}
                    />
                </div>
                {errorMessage && (
                    <div className="text-red-500 mb-4">
                        {errorMessage}
                    </div>
                )}
                <button
                    onClick={handleSignup}
                    className="text-sm w-full flex items-center justify-center gap-3 font-semibold bg-amber-400 h-full rounded-lg py-2 mb-4"
                >
                    Sign Up
                </button>
                <div className="font-medium">Already have an account?
                    <Link to="/login" className="text-amber-600 font-semibold"> Login</Link>
                </div>
            </div>
        </div>
    );
};

export default RestaurantSignupPage;
