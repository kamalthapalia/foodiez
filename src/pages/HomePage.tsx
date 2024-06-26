// HomePage.tsx

import React, {useState, useEffect} from "react";
import Hero from "../components/Hero";
import CardGroup from "../components/CardGroup";
import url from "../utils/url";
import {Product} from "../utils/types";

const HomePage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${url}/product/all`);
                if (response.ok) {
                    const data: { code: number, message: string, data: Product[] } = await response.json();
                    setProducts(data.data);
                } else {
                    throw new Error("Failed to fetch products");
                }
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <Hero/>
            <CardGroup title="Popular" content={products.reverse()}/>
        </div>
    );
};

export default HomePage;
