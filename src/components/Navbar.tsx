import {AiOutlineHeart, AiOutlineSearch} from "react-icons/ai";
import {BiCart, BiSearch, BiUser} from "react-icons/bi";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={`container mx-auto`}>
            <div className={`flex justify-between items-center py-4`}>
                <Link to={`/`}>
                    <p className={`text-4xl font-black lop tracking-wider`}>FOODIEZ</p>
                </Link>
                <div className={`flex items-center gap-5`}>
                    <div className={`flex border-gray-500/50 border items-center p-2 py-1.5 rounded-lg w-[350px]`}>
                        <input type="text" placeholder={`Search Restaurant or Cushine.`}
                               className={`outline-none bg-transparent flex-grow`}/>
                        <BiSearch size={`1.5em`} className={`text-gray-800`}/>
                    </div>
                    <ul className={`inline-flex gap-4 font-semibold items-center`}>
                        <li><AiOutlineHeart className={`text-2xl cursor-pointer`}/></li>
                        <li><BiCart className={`text-2xl cursor-pointer`}/></li>
                        <li><BiUser className={`text-2xl cursor-pointer`}/></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;