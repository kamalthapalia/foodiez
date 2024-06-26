// FoodPage.tsx

import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import FoodDetails from "../components/FoodDetails";
import CardGroupScroll from "../components/CardGroupScroll";
import url from "../utils/url";
import {ProductResponse, Product} from "../utils/types"; // Import the types

const FoodPage: React.FC = () => {
    const {id} = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const [chunks, setChunks] = useState<Product[][]>([]);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`${url}/product/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("token")}`,
                        'Content-Type': 'application/json'
                    }
                });
                const data: ProductResponse = await response.json();
                if (data.code === 200) {
                    setProduct(data.data);
                } else {
                    console.error("Failed to fetch product data");
                }
            } catch (error) {
                console.error("Error fetching product data:", error);
            }
        };

        const fetchAllProducts = async () => {
            try {
                const response = await fetch(`${url}/product/all`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("token")}`,
                        'Content-Type': 'application/json'
                    }
                });
                const data: ProductResponse = await response.json();
                if (data.code === 200) {
                    setAllProducts(data.data);
                } else {
                    console.error("Failed to fetch all products");
                }
            } catch (error) {
                console.error("Error fetching all products:", error);
            }
        };

        fetchProduct();
        fetchAllProducts();
    }, [id]);

    useEffect(() => {
        const chunkSize = 10;
        const productChunks = [];
        for (let i = 0; i < allProducts.length; i += chunkSize) {
            productChunks.push(allProducts.slice(i, i + chunkSize));
        }
        setChunks(productChunks);
    }, [allProducts]);

    return (
        <div className="container mx-auto my-10">
            <div className="flex flex-col gap-10">
                {product ? <FoodDetails product={product}/> : <p>Loading...</p>}
                {chunks.length > 0 ? (
                    chunks.map((chunk, index) => (
                        <CardGroupScroll key={index} title={`Frequently Bought Together.`} content={chunk}/>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default FoodPage;
