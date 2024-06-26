import {AiOutlineHeart, AiOutlineMinus, AiOutlinePlus, AiOutlineShoppingCart} from "react-icons/ai";
import {useState} from "react";
import {Link} from "react-router-dom";
import {Product} from "../utils/types.ts";
import url from "../utils/url.tsx";

type props = {
    content: Product
}
const FoodCard = ({content}: props) => {
    const [orderitem, setOrderitem] = useState(0)
    return (
        <div
            className={`rounded-lg border p-4 border-gray-500/15 transition duration-500 flex flex-col gap-3`}>
            <div className={`h-[240px] relative`}>
                <div className={`flex justify-between h-full`}>
                    <div className={` w-[45px] h-0`}></div>
                    <Link to={`/f/${content.id}`}>
                        <img className={`w-[200px] mt-3 h-[200px] rounded-full object-cover`}
                             src={`${url}/product/image/${content.image}`}
                             alt={content.name}/>
                    </Link>
                    <div
                        className={`bg-amber-400 text-white rounded-lg w-[45px] h-[45px] flex items-center justify-center`}>
                        <AiOutlineHeart size={`1.5em`}/>
                    </div>
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
                {orderitem < 1 && <button onClick={() => {
                    setOrderitem(1)
                }}
                                          className={`text-sm w-full flex items-center justify-center gap-3 font-semibold bg-amber-400 h-full rounded-lg`}>
                    <AiOutlineShoppingCart size={`1.5em`}/> Add to Cart
                </button>}
                {
                    orderitem > 0 && <div className={`flex items-center justify-between`}>
                        <div className={`flex items-center`}>
                            <button
                                className={`bg-amber-400 min-h-full flex items-baseline justify-center rounded-lg p-2`}
                                onClick={() => {
                                    setOrderitem(orderitem - 1)
                                }}><AiOutlineMinus/></button>
                            <div className={`font-bold min-w-20 text-center`}>{orderitem}</div>
                            <button
                                className={`bg-amber-400 min-h-full flex items-center justify-center rounded-lg p-2`}
                                onClick={() => {
                                    setOrderitem(orderitem + 1)
                                }}><AiOutlinePlus/></button>
                        </div>
                        <button className={`font-semibold text-amber-600`}>Checkout</button>
                    </div>
                }
            </div>
        </div>
    );
};

export default FoodCard;