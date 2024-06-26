import React, {useState, useEffect} from "react";
import {AiOutlineClose, AiOutlineEdit, AiOutlineLogout} from "react-icons/ai";
import {BiUpload} from "react-icons/bi";
import {FaRegStar, FaStar, FaStarHalfAlt} from "react-icons/fa";
import {PiBowlFood} from "react-icons/pi";
import {LuMapPin} from "react-icons/lu";
import {MdDateRange} from "react-icons/md";
import {TiPhoneOutline} from "react-icons/ti";
import {useNavigate} from "react-router-dom";

interface Restaurant {
    id: number;
    fullName: string;
    email: string;
    phone: string;
    address: string;
    openTime: string;
    description: string;
}

const ResDetailsAdmin: React.FC<{ restaurant: Restaurant }> = ({restaurant}) => {
    const [rating, setRating] = useState<number>(4.5);
    const [editOpen, setEditOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setEditOpen(false);
            }
        };

        document.addEventListener("keydown", handleEsc);

        return () => {
            document.removeEventListener("keydown", handleEsc);
        };

    }, []);

    return (
        <div className={``}>
            {editOpen &&
                <div className={`fixed min-h-screen backdrop-blur bg-gray-500/30 inset-0 z-50`}>
                    <div className={`h-full max-w-[900px] mx-auto py-8`}>
                        <div className={`bg-white shadow-lg h-full rounded-lg p-3`}>
                            <div className={`flex items-center justify-between`}>
                                <p className={`text-lg font-medium`}>Edit Details</p>
                                <AiOutlineClose onClick={() => setEditOpen(false)} size={`1.4em`}
                                                className={`cursor-pointer`}/>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <div className={`flex gap-12`}>
                <div className={`relative`}>
                    <div
                        className={`absolute bottom-3 hover:bg-gray-300 transition cursor-pointer p-3 bg-gray-200 right-3 rounded-full`}>
                        <BiUpload/>
                    </div>
                    <img className={`h-[250px] w-[250px] rounded-3xl object-cover`}
                         src="https://i.pinimg.com/564x/ff/b1/4c/ffb14c305f82e30ad512595394b8af7c.jpg" alt=""/>
                </div>
                <div className={`flex-grow flex flex-col gap-1.5 max-w-[800px]`}>
                    <div className={`flex flex-col gap-1.5 mb-5`}>
                        <div className={`flex items-center gap-2.5`}>
                            <p className={`text-3xl font-bold`}>{restaurant.fullName}</p>
                            <div
                                onClick={() => {
                                    localStorage.removeItem("token")
                                    window.location.reload()
                                    navigate("/")
                                }}
                                className={`px-5 py-1.5 flex items-center font-semibold border-2 border-gray-600 hover:bg-gray-200 cursor-pointer rounded-full gap-2`}>
                                <AiOutlineLogout className={`cursor-pointer`}
                                                 size={`1.5em`}/>
                                <p>Logout</p>
                            </div>
                        </div>
                        <div className={`flex items-baseline text-amber-500`}>
                            {[...Array(Math.floor(rating))].map((_, index) => (<FaStar key={index}/>))}
                            {rating % 1 !== 0 && <FaStarHalfAlt/>}
                            {[...Array(5 - Math.ceil(rating))].map((_, index) => (<FaRegStar key={index}/>))}
                            <p className={`ml-1 font-semibold text-gray-900`}>({rating})</p>
                        </div>
                    </div>
                    <div className={`text-sm text-gray-600 font-semibold flex gap-2 items-start`}>
                        <PiBowlFood className={`min-w-5  min-h-5`} size={`1.5em`}/>
                        <p>{restaurant.description}</p>
                    </div>
                    <div className={`text-sm text-gray-600 font-semibold flex gap-2 items-start`}>
                        <LuMapPin size={`1.5em`} className={`min-w-5  min-h-5`}/>
                        <p>{restaurant.address}</p>
                    </div>
                    <div className={`text-sm text-gray-600 font-semibold flex gap-2 items-start`}>
                        <MdDateRange className={`min-w-5  min-h-5`} size={`1.2em`}/>
                        <p>{restaurant.openTime}</p>
                    </div>
                    <div className={`text-sm text-gray-600 font-semibold flex gap-2 items-start`}>
                        <TiPhoneOutline className={`min-w-5  min-h-5`} size={`1.2em`}/>
                        <p>{restaurant.phone} | {restaurant.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResDetailsAdmin;
