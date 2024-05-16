import {AiOutlineHeart, AiOutlineMinus, AiOutlinePlus, AiOutlineShop, AiOutlineShoppingCart} from "react-icons/ai";
import {PiBowlFood, PiCarrot} from "react-icons/pi";
import {useState} from "react";
import {TbTruckDelivery} from "react-icons/tb";
import {Link} from "react-router-dom";

const FoodDetails = () => {
    const [orderitem, setOrderitem] = useState(0)
    const [rate, setRate] = useState(50)
    return (
        <div className={``}>
            <div className={`grid grid-cols-2 gap-10`}>
                <div className={`relative`}>
                    <div
                        className={`bg-amber-400 absolute inset-0 m-4 cursor-pointer text-white rounded-lg w-[45px]  h-[45px] flex items-center justify-center`}>
                        <AiOutlineHeart size={`1.5em`}/>
                    </div>
                    <img className={`w-full h-[650px] object-cover rounded-b-3xl rounded-tr-3xl`}
                         src="https://i.pinimg.com/564x/3b/be/6c/3bbe6c52325059b44e09c5de57b0383f.jpg"/>
                </div>
                <div className={`flex flex-col gap-14`}>
                    <p className={`text-3xl font-bold`}>Egg Chowmein</p>
                    <div className={`grid gap-3`}>
                        <div className={`text-sm text-gray-600 font-semibold flex  gap-2 items-start`}>
                            <PiBowlFood size={`1.5em`}/>
                            <p>Indo-Chinese fusion noodles tossed with eggs, vegetables, and aromatic
                                spices,
                                offering a flavorful culinary experience.</p>
                        </div>
                        <div className={`text-sm text-gray-600 font-semibold flex  gap-2 items-start`}>
                            <PiCarrot size={`1.5em`}/>
                            <p>
                                <span className={`font-bold text-gray-950`}>Ingredients: </span>Noodles, eggs,
                                vegetables (bell peppers, carrots, cabbage), onions, garlic, soy sauce, ginger, chili
                                powder, pepper.</p>
                        </div>
                        <div className={`text-sm text-amber-500 font-semibold flex  gap-2 items-start`}>
                            <AiOutlineShop size={`1.5em`}/>
                            <Link to={`/r/id`}><p>Monis Momo ghar</p></Link>
                        </div>
                    </div>
                    <div className={`mt-auto`}>
                        <div>
                            <p className={`text-3xl font-bold mb-5 text-red-500`}> रु.{rate} <span
                                className={`text-gray-600 text-sm`}>per Plate</span>
                            </p>
                        </div>
                        <div className={`h-[42px]`}>
                            {orderitem < 1 && <button onClick={() => {
                                setOrderitem(1)
                            }}
                                                      className={`text-sm w-full flex items-center justify-center gap-3 font-semibold bg-amber-400 h-full rounded-md`}>
                                <AiOutlineShoppingCart size={`1.5em`}/> Add to Cart
                            </button>}
                            {
                                orderitem > 0 && <div className={`flex items-center justify-between`}>
                                    <div className={`flex items-center`}>
                                        <button
                                            className={`bg-amber-400 min-h-full flex items-center justify-center rounded-lg p-2`}
                                            onClick={() => {
                                                setOrderitem(orderitem - 1)
                                            }}><AiOutlineMinus/></button>
                                        <div className={`font-bold min-w-20 px-3 text-center`}>{orderitem}</div>
                                        <button
                                            className={`bg-amber-400 min-h-full flex items-center justify-center rounded-lg p-2`}
                                            onClick={() => {
                                                setOrderitem(orderitem + 1)
                                            }}><AiOutlinePlus/></button>
                                    </div>
                                    <div className={`text-amber-500 font-bold cursor-pointer`}>Checkout</div>
                                </div>
                            }
                        </div>

                        <div className={`flex items-center gap-4 justify-center pt-4 text-gray-600`}>
                            <TbTruckDelivery size={`2em`}/>
                            <p className={`text-sm font-semibold`}>Free Delivery above Rs. 999</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;