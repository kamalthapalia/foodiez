import {FaRegStar, FaStar, FaStarHalfAlt} from "react-icons/fa";
import {PiBowlFood} from "react-icons/pi";
import {LuMapPin, LuClock} from "react-icons/lu";
import {MdDateRange} from "react-icons/md";
import {TiPhoneOutline} from "react-icons/ti";
import {useState} from "react";

interface Restaurant {
    id: number;
    fullName: string;
    email: string;
    phone: string;
    address: string;
    openTime: string;
    description: string;
}

const RestaurantDetails: React.FC<{ restaurant: Restaurant }> = ({restaurant}) => {
    const [rating, setRating] = useState(4.5);

    return (
        <div className={``}>
            <div className={`flex gap-12`}>
                <img
                    className={`h-[250px] w-[250px] rounded-3xl object-cover`}
                    src="https://i.pinimg.com/564x/ff/b1/4c/ffb14c305f82e30ad512595394b8af7c.jpg"
                    alt=""
                />
                <div className={`flex-grow flex flex-col gap-1.5 max-w-[800px]`}>
                    <div className={`flex flex-col gap-1.5 mb-5`}>
                        <p className={`text-3xl font-bold`}>{restaurant.fullName}</p>
                        <div className={`flex items-baseline text-amber-500`}>
                            {[...Array(Math.floor(rating))].map((_, index) => (
                                <FaStar key={index}/>
                            ))}
                            {rating % 1 !== 0 && <FaStarHalfAlt/>}
                            {[...Array(5 - Math.ceil(rating))].map((_, index) => (
                                <FaRegStar key={index}/>
                            ))}
                            <p className={`ml-1 font-semibold text-gray-900`}>
                                {rating} (<span className={`text-sm text-gray-500`}>42 ratings</span>)
                            </p>
                        </div>
                    </div>
                    <div className={`text-sm text-gray-600 font-semibold flex gap-2 items-start`}>
                        <PiBowlFood className={`min-w-5 min-h-5`} size={`1.5em`}/>
                        <p>
                            {restaurant.description}
                        </p>
                    </div>
                    <div className={`text-sm text-gray-600 font-semibold flex gap-2 items-start`}>
                        <LuMapPin size={`1.5em`} className={`min-w-5 min-h-5`}/>
                        <p>{restaurant.address}</p>
                    </div>
                    <div className={`text-sm text-gray-600 font-semibold flex gap-2 items-start`}>
                        <MdDateRange className={`min-w-5 min-h-5`} size={`1.2em`}/>
                        <p>{restaurant.openTime}</p>
                    </div>
                    <div className={`text-sm text-gray-600 font-semibold flex gap-2 items-start`}>
                        <TiPhoneOutline className={`min-w-5 min-h-5`} size={`1.2em`}/>
                        <p>{restaurant.phone} | {restaurant.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantDetails;
