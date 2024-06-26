import React, {useEffect, useState} from 'react';
import ResDetailsAdmin from "../components/res/ResDetailsAdmin";
import CardGroupRes from "../components/res/CardGroupRes";
import AddProductModal from './AddProductPage';
import url from "../utils/url";
import {ApiResponse, Restaurant} from '../utils/types';

const ResPage: React.FC = () => {
    const [showAddProductModal, setShowAddProductModal] = useState(false);
    const [data, setData] = useState<Restaurant | null>(null);

    useEffect(() => {
        const fetchRestaurantDetails = async () => {
            try {
                const response = await fetch(`${url}/restaurant/me`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem("token")}`
                    }
                });
                if (response.ok) {
                    const result: ApiResponse = await response.json();
                    setData(result.data);
                } else {
                    throw new Error("Failed to fetch restaurant details");
                }
            } catch (error) {
                console.error("Error fetching restaurant details:", error);
            }
        };

        fetchRestaurantDetails();
    }, [showAddProductModal]);

    return (
        <div className="container mx-auto flex flex-col gap-8 my-8 relative">
            {showAddProductModal && <AddProductModal onClose={() => setShowAddProductModal(false)}/>}
            {data && <ResDetailsAdmin restaurant={data}/>}
            <div>
                <button
                    onClick={() => setShowAddProductModal(true)}
                    className="px-24 flex mt-10 items-center justify-center gap-3 font-semibold border-amber-400 border-2 hover:bg-amber-100 transition h-full rounded-lg py-1.5 mb-4"
                >
                    Add New Product
                </button>
            </div>
            <CardGroupRes title="My Products" content={data?.products.reverse()}/>
            {/*<RatingAndReviews/>*/}
        </div>
    );
};

export default ResPage;
