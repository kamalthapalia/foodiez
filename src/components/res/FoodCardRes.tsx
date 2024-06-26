import {Link} from "react-router-dom";
import {AiOutlineEdit, AiOutlineHeart, AiOutlineMinus, AiOutlinePlus, AiOutlineShoppingCart} from "react-icons/ai";
import cardprops from "../../utils/CardProps.tsx";
import {useState} from "react";
import {Product} from "../../utils/types.ts";
import url from "../../utils/url.tsx";

type props = {
    content: Product
}
const FoodCardRes = ({content}: props) => {
    return (
        <div
            className={`rounded-lg border p-4 border-gray-500/15 transition duration-500 flex flex-col gap-3`}>
            <div className={`h-[240px] relative`}>
                <div className={`flex justify-center h-full`}>
                    <Link to={`/f/${content.id}`}>
                        <img className={`w-[200px] mt-3 h-[200px] rounded-full object-cover`}
                             src={`${url}/product/image/${content.image}`}
                        />
                    </Link>

                </div>
                <div className={`absolute bg-amber-100/75 bottom-0 h-[150px] w-full -z-10 rounded-lg`}></div>
            </div>
            <div className={`flex`}>
                <div className={`flex-grow`}>
                    <Link to={`/f/${content.id}`}><p className={`text-lg font-bold`}>{content.name}</p></Link>
                    <Link to={`/r/${content.restaurantId}`}><p
                        className={`text-sm text-gray-600 font-semibold`}>{content.restaurantName}</p>
                    </Link>
                    <p className={`text-lg text-red-500 font-bold`}>रु.{content.price}</p>
                </div>

            </div>
            <div className={`h-[45px]`}>
                <button onClick={() => {
                }}
                        className={`text-sm w-full flex items-center justify-center gap-3 font-semibold bg-amber-400 h-full rounded-lg`}>
                    <AiOutlineEdit size={`1.5em`}/> Edit Product
                </button>

            </div>
        </div>
    );
};

export default FoodCardRes;