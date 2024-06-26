import React, {useRef, useEffect} from "react";
import FoodCard from "./FoodCard.tsx";
import cardprops from "../utils/CardProps.tsx";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import {Product} from "../utils/types.ts";

type Props = {
    title: string;
    content: Product[];
};

const CardGroupScroll: React.FC<Props> = ({title, content}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const cardWidthRef = useRef<number>(0);

    useEffect(() => {
        if (cardRef.current) {
            cardWidthRef.current = cardRef.current.offsetWidth;
        }
    }, []);

    const handleScroll = (scrollOffset: number) => {
        if (containerRef.current) {
            // Calculate the scroll width of the container divided by the number of cards
            const cardScrollWidth = containerRef.current.scrollWidth / content.length;
            // Scroll by the calculated scroll width multiplied by the scroll offset
            containerRef.current.scrollLeft += scrollOffset * cardScrollWidth;
        }
    };

    return (
        <div className="container mx-auto relative">
            <button
                onClick={() => handleScroll(-1)}
                className={`absolute text-lg left-0 bg-white border border-gray-500/50 hover:bg-gray-200 transition z-50 -translate-x-1/2 w-[60px] h-[60px] rounded-full grid place-items-center top-1/2`}
            >
                <IoIosArrowBack/>
            </button>
            <button
                onClick={() => handleScroll(1)}
                className={`absolute text-lg right-0 bg-white border border-gray-500/50 hover:bg-gray-200 transition z-50 translate-x-1/2 w-[60px] h-[60px] rounded-full grid place-items-center top-1/2`}
            >
                <IoIosArrowForward/>
            </button>
            <div className={`flex justify-between`}>
                <p className="text-xl font-semibold py-4">{title}</p>
                <button className={`font-semibold text-gray-500`}>See All</button>
            </div>
            <div className="overflow-hidden">
                <div
                    ref={containerRef}
                    className="flex space-x-4 overflow-x-auto scroll-smooth"
                    style={{scrollSnapType: "x mandatory"}} // Add scroll snap type here
                >
                    {content?.map((val, index) => (
                        <div
                            key={index}
                            ref={index === 0 ? cardRef : null}
                            className="flex-none"
                            style={{scrollSnapAlign: "start"}} // Add scroll snap align here
                        >
                            <FoodCard content={val}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardGroupScroll;
