// FoodDetails.tsx

import {useState} from 'react';
import {AiOutlineHeart, AiOutlineMinus, AiOutlinePlus, AiOutlineShop, AiOutlineShoppingCart} from "react-icons/ai";
import {PiBowlFood, PiCarrot} from "react-icons/pi";
import {TbTruckDelivery} from "react-icons/tb";
import {Link} from "react-router-dom";
import {Product} from "../utils/types";
import url from "../utils/url.tsx"; // Import the Product type

interface FoodDetailsProps {
    product: Product;
}

const FoodDetails = ({product}: FoodDetailsProps) => {
    const [orderItem, setOrderItem] = useState(0);

    return (
        <div className="">
            <div className="grid grid-cols-2 gap-10">
                <div className="relative">
                    <div
                        className="bg-amber-400 absolute inset-0 m-4 cursor-pointer text-white rounded-lg w-[45px] h-[45px] flex items-center justify-center">
                        <AiOutlineHeart size="1.5em"/>
                    </div>
                    <img className="w-full h-[650px] object-cover rounded-b-3xl rounded-tr-3xl"
                         src={`${url}/product/image/${product.image}`}
                         alt={product.name}
                    />
                </div>
                <div className="flex flex-col gap-14">
                    <p className="text-3xl font-bold">{product.name}</p>
                    <div className="grid gap-3">
                        <div className="text-sm text-gray-600 font-semibold flex gap-2 items-start">
                            <PiBowlFood size="1.5em"/>
                            <p>{product.description}</p>
                        </div>
                        <div className="text-sm text-gray-600 font-semibold flex gap-2 items-start">
                            <PiCarrot size="1.5em"/>
                            <p>
                                <span className="font-bold text-gray-950">Ingredients: </span>{product.ingredients}
                            </p>
                        </div>
                        <div className="text-sm text-amber-500 font-semibold flex gap-2 items-start">
                            <AiOutlineShop size="1.5em"/>
                            <Link to={`/r/${product.restaurantId}`}>
                                <p>{product.restaurantName}</p>
                            </Link>
                        </div>
                    </div>
                    <div className="mt-auto">
                        <div>
                            <p className="text-3xl font-bold mb-5 text-red-500">रु. {product.price} <span
                                className="text-gray-600 text-sm">per Plate</span>
                            </p>
                        </div>
                        <div className="h-[42px]">
                            {orderItem < 1 ? (
                                <button onClick={() => setOrderItem(1)}
                                        className="text-sm w-full flex items-center justify-center gap-3 font-semibold bg-amber-400 h-full rounded-md">
                                    <AiOutlineShoppingCart size="1.5em"/> Add to Cart
                                </button>
                            ) : (
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <button
                                            className="bg-amber-400 min-h-full flex items-center justify-center rounded-lg p-2"
                                            onClick={() => setOrderItem(orderItem - 1)}>
                                            <AiOutlineMinus/>
                                        </button>
                                        <div className="font-bold min-w-20 px-3 text-center">{orderItem}</div>
                                        <button
                                            className="bg-amber-400 min-h-full flex items-center justify-center rounded-lg p-2"
                                            onClick={() => setOrderItem(orderItem + 1)}>
                                            <AiOutlinePlus/>
                                        </button>
                                    </div>
                                    <div className="text-amber-500 font-bold cursor-pointer">Checkout</div>
                                </div>
                            )}
                        </div>
                        <div className="flex items-center gap-4 justify-center pt-4 text-gray-600">
                            <TbTruckDelivery size="2em"/>
                            <p className="text-sm font-semibold">Free Delivery above Rs. 999</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;
