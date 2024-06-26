// src/types.ts

export interface Product {
    id: number;
    name: string;
    price: number;
    description?: string;
    ingredients?: string;
    restaurantId: number;
    restaurantName: string;
    image?: string;
}

export interface Restaurant {
    address: string;
    openTime: string;
    description: string;
    id: number;
    fullName: string;
    email: string;
    phone: string;
    products: Product[];
}

export interface ApiResponse {
    code: number;
    message: string;
    data: Restaurant;
}

export interface ProductResponse {
    code: number;
    message: string;
    data: Product;
}