import {FaRegCircle} from "react-icons/fa";
import {CiBurger} from "react-icons/ci";
import {BiSearch} from "react-icons/bi";
import {IoFastFoodOutline} from "react-icons/io5";
import {useEffect} from "react";
import {PiPizza} from "react-icons/pi";

const Hero = () => {
    useEffect(() => {

    })
    return (
        <div
            className={`w-full h-[85vh] grid grid-cols-12 relative overflow-x-hidden overflow-hidden py-6`}>
            <div className={`absolute w-full h-full bg-gradient-to-br from-sky-50 to-white -z-50`}></div>
            <div className={`col-span-7 flex flex-col px-24 h-full gap-8 justify-center relative`}>
                <div className={`absolute h-full w-full  -z-10`}>
                    <IoFastFoodOutline size={`50em`} className={`text-gray-200 -translate-x-1/2`}/>
                    <PiPizza className={`absolute right-0 top-16 rotate-45 text-rose-50`} size={`20em`}/>
                </div>
                <div className={`flex flex-col gap-8`}>
                    <p className={`text-amber-400 font-black text-8xl`}>Hungry ?</p>
                    <p className={`text-lg text-gray-800 font-medium`}>What are your taste buds calling for today?
                        Enter
                        a
                        restaurant name, your favorite cuisine, or a specific dish to find it fast.</p>
                </div>
                <div className={`flex gap-2`}>

                    <div
                        className={`flex border-gray-500/50 bg-white border items-center p-2 py-1.5 rounded-lg w-[300px]`}>
                        <input type="text" placeholder={`Search Restaurant or Cushine.`}
                               className={`outline-none flex-grow`}/>
                    </div>
                    <button
                        className={`p-14 hover:scale-[1.02] transition bg-amber-400 rounded-lg py-3.5 font-semibold `}>Search
                    </button>

                </div>
            </div>
            <div className={`col-span-5 relative flex items-center`}>
                <img
                    className={`w-[650px] h-[650px] object-cover rounded-full `}
                    src="https://images.pexels.com/photos/1833336/pexels-photo-1833336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""/>
                <FaRegCircle className={`absolute -z-10 inset-0 translate-x-1/4  text-amber-400`}
                             size={`60em`}/>
            </div>
        </div>
    );
};

export default Hero;