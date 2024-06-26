import React, {useState} from "react";
import FoodCard from "./FoodCard.tsx";
import cardprops from "../utils/CardProps.tsx";
import {Product} from "../utils/types.ts";

type Props = {
    title: string;
    content: Product[];
};

const CardGroup: React.FC<Props> = ({title, content}) => {
    const [filter, setFilter] = useState<string>("All");

    // Function to handle filter change
    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(e.target.value);
    };

    // Filtered content based on the selected filter
    const filteredContent = content.filter((val) => {
        switch (filter) {
            case "popular":
                return content;
            case "cheap":
                return content.sort((a, b) => a.price - b.price);
            case "expensive":
                return content.sort((a, b) => b.price - a.price);
            default:
                return true; // 'All' case
        }
    });

    return (
        <div className={`container mx-auto`}>
            <div className={`flex justify-between items-center`}>
                <p className={`text-xl font-semibold py-4`}>{title}</p>
                <div className={`flex gap-5`}>
                    <p className={`font-bold`}>Filter: </p>
                    <select value={filter} onChange={handleFilterChange} className="outline-none">
                        <option value="All">All</option>
                        <option value="popular">Most Popular</option>
                        <option value="cheap">Cheap to Expensive</option>
                        <option value="expensive">Expensive to Cheap</option>
                    </select>
                </div>
            </div>
            <div className={`grid grid-cols-4 gap-7`}>
                {filteredContent.map((val, index) => (<FoodCard key={index} content={val}/>))}
            </div>
        </div>
    );
};

export default CardGroup;
