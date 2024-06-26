import React, {useState, useEffect} from 'react';
import CardGroup from "../components/CardGroup";
import cardData from "../utils/Foods";
import url from '../utils/url';

interface UserData {
    fullName: string;
    email: string;
    phone: string;
    imageUrl: string;
}

const UserProfilePage: React.FC = () => {
    // State variables to store user data
    const [userData, setUserData] = useState<UserData>({
        fullName: '',
        email: '',
        phone: '',
        imageUrl: 'https://avatar.iran.liara.run/public'
    });
    const [token, setToken] = useState(localStorage.getItem('token'));

    // Fetch user data when the component mounts
    useEffect(() => {

        const fetchUserData = async () => {
            try {
                const response = await fetch(`${url}/user/me`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}` // Replace with actual token
                    }
                });

                if (response.ok) {
                    const result = await response.json();
                    setUserData({
                        fullName: result.data.fullName,
                        email: result.data.email,
                        phone: result.data.phone,
                        imageUrl: userData.imageUrl // Use a default or fetched image URL
                    });
                } else {
                    console.error('Failed to fetch user data');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div className="py-8">
            <div className="flex flex-col items-center gap-5">
                <div className="w-96 rounded-full h-96 p-2 border-[3px] border-amber-400">
                    <img
                        className="w-full h-full rounded-full object-cover"
                        src={userData.imageUrl}
                        alt="User profile"
                    />
                </div>
                <div className="text-center">
                    <p className="text-lg font-semibold">{userData.fullName}</p>
                    <p className="text-gray-600 font-medium">{userData.email}</p>
                </div>
                <CardGroup title="My Recent Orders" content={cardData}/>
            </div>
        </div>
    );
};

export default UserProfilePage;
