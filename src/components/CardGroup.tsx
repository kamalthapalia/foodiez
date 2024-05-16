import React, {useState} from "react";
import FoodCard from "./FoodCard.tsx";
import cardprops from "../utils/CardProps.tsx";

type Props = {
    title: string;
    content: cardprops[];
};

const CardGroup: React.FC<Props> = ({title, content}) => {
    const [filter, setFilter] = useState<string>("");

    // Function to handle filter change
    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(e.target.value);
    };

    // Filtered content based on the selected filter

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
                {content.map((val, index) => (<FoodCard key={index} content={val}/>))}
            </div>
        </div>
    );
};

export default CardGroup;
