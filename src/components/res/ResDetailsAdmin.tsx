import {FaRegStar, FaStar} from "react-icons/fa";
import {FaStarHalfStroke} from "react-icons/fa6";
import {PiBowlFood} from "react-icons/pi";
import {LuMapPin} from "react-icons/lu";
import {MdDateRange} from "react-icons/md";
import {TiPhoneOutline} from "react-icons/ti";
import {useEffect, useState} from "react";
import {AiOutlineClose, AiOutlineEdit} from "react-icons/ai";
import {BiCross, BiUpload} from "react-icons/bi";

const ResDetailsAdmin = () => {
    const [rating, setRating] = useState<number>(4.5)
    const [editOpen, setEditOpen] = useState(false)


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
        <div className={``}>{editOpen &&
            <div className={`fixed min-h-screen backdrop-blur bg-gray-500/30 inset-0 z-50`}>
                <div className={`h-full max-w-[900px] mx-auto py-8`}>
                    <div className={`bg-white shadow-lg h-full rounded-lg p-3`}>
                        <div className={`flex items-center justify-between`}>
                            <p className={`text-lg font-medium`}>Edit Details</p>
                            <AiOutlineClose onClick={() => {
                                setEditOpen(false)
                            }} size={`1.4em`} className={`cursor-pointer`}/>
                        </div>
                    </div>
                </div>
            </div>}
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
                        <div className={`flex items-end gap-2.5`}>
                            <p className={`text-3xl font-bold`}>Monis Khaja Ghar</p>
                            <AiOutlineEdit onClick={() => {
                                setEditOpen(true)
                            }} className={`cursor-pointer`} size={`1.7em`}/>
                        </div>
                        <div className={`flex items-baseline text-amber-500`}>
                            {Array(Math.floor(rating)).fill(" ").map((index) => (<FaStar key={index}/>))}
                            {rating > Math.floor(rating) && <FaStarHalfStroke/>}
                            {5 - Math.ceil(rating) > 0 && Array(5 - Math.ceil(rating)).fill(" ").map((index) => (
                                <FaRegStar key={index}/>))}
                            <p
                                className={`ml-1 font-semibold text-gray-900`}>({rating})</p>
                        </div>
                    </div>
                    <div className={`text-sm text-gray-600 font-semibold flex  gap-2 items-start`}>
                        <PiBowlFood className={`min-w-5  min-h-5`} size={`1.5em`}/>
                        <p>
                            Monis Momo Ghar offers a delightful dining experience centered around Nepalese dumplings
                            known as momos. Enjoy an array of fillings, from chicken to pork and vegetarian options,
                            expertly steamed or fried to perfection. Each bite tells a story of tradition and culinary
                            excellence.</p>
                    </div>
                    <div className={`text-sm text-gray-600 font-semibold flex  gap-2 items-start`}>
                        <LuMapPin size={`1.5em`} className={`min-w-5  min-h-5`}/>
                        <p>Birtamode-4 Kanchanjunga Tole Jhapa</p>
                    </div>
                    <div className={`text-sm text-gray-600 font-semibold flex  gap-2 items-start`}>
                        <MdDateRange className={`min-w-5  min-h-5`} size={`1.2em`}/>
                        <p>6:00 AM - 10:00 PM | 7 days a week</p>
                    </div>
                    <div className={`text-sm text-gray-600 font-semibold flex  gap-2 items-start`}>
                        <TiPhoneOutline className={`min-w-5  min-h-5`} size={`1.2em`}/>
                        <p>9817070845 | kamalthapaliya7@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResDetailsAdmin;