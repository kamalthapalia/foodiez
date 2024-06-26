// HotelPage.tsx

import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import CardGroup from "../components/CardGroup";
import RestaurantDetails from "../components/RestrauantDetails";
import url from "../utils/url";
import {ApiResponse, Restaurant} from "../utils/types";

const HotelPage = () => {
    const [data, setData] = useState<Restaurant | null>(null);
    const {id} = useParams<{ id: string }>();

    useEffect(() => {
        const fetchRestaurantDetails = async () => {
            try {
                const response = await fetch(`${url}/restaurant/${id}`);
                if (response.ok) {
                    const responseData: ApiResponse = await response.json();
                    setData(responseData.data);
                } else {
                    throw new Error("Failed to fetch restaurant details");
                }
            } catch (error) {
                console.error("Error fetching restaurant details:", error);
            }
        };

        fetchRestaurantDetails();
    }, [id]);

    return (
        <div className="container mx-auto flex flex-col gap-14">
            {data && <RestaurantDetails restaurant={data}/>}
            {data && data.products && (
                <CardGroup title="From this Restaurant" content={data.products.reverse()}/>
            )}
            {/* <RatingAndReviews/> */}
        </div>
    );
};

export default HotelPage;
