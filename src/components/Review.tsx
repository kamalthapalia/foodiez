import {FaRegStar, FaStar} from "react-icons/fa";
import {FaStarHalfStroke} from "react-icons/fa6";
import {useState} from "react";

type Reviewprops = {
    reviewer: string;
    rating: number;
    review: string;
    date?: string;
}

const Review = ({reviewer, rating, review, date}: Reviewprops) => {
    return (
        <div>
            <div className={`flex flex-col gap-1.5`}>
                <div className={`flex items-end gap-2`}>
                    <p className={`font-semibold`}>{reviewer}</p>
                    <p className={`text-gray-400 text-sm font-medium `}>1 month ago</p>
                </div>
                <div className={`flex items-baseline text-amber-500 text-sm`}>
                    {Array(Math.floor(rating)).fill(" ").map((index) => (<FaStar key={index}/>))}
                    {rating > Math.floor(rating) && <FaStarHalfStroke/>}
                    {5 - Math.ceil(rating) > 0 && Array(5 - Math.ceil(rating)).fill(" ").map((index) => (
                        <FaRegStar key={index}/>))}
                    {/*<p className={`ml-1 font-semibold text-gray-900`}>({rating})</p>*/}
                </div>
                <p className={`font-medium text-gray-600`}>{review}
                </p>
            </div>
        </div>
    );
};

export default Review;