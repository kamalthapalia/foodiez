import './App.css'
import FoodCard from "./components/FoodCard.tsx";
import FoodDetails from "./components/FoodDetails.tsx";
import RestrauantDetails from "./components/RestrauantDetails.tsx";
import RatingAndReviews from "./components/RatingAndReviews.tsx";
import Navbar from "./components/Navbar.tsx";
import CardGroup from "./components/CardGroup.tsx";
import cardprops from "./utils/CardProps.tsx";
import FoodPage from "./pages/FoodPage.tsx";
import HotelPage from "./pages/HotelPage.tsx";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import React from "react";
import Footer from "./components/Footer.tsx";
import FoodPageRes from "./pages/FoodPageRes.tsx";
import ResPage from "./pages/ResPage.tsx";

function App() {
    const cardData: cardprops[] = [
        {
            image: "https://example.com/food1.jpg",
            title: "Spaghetti Carbonara",
            restaurant: "Italian Bistro",
            price: 15
        },
        {
            image: "https://example.com/food2.jpg",
            title: "Sushi Platter",
            restaurant: "Japanese Restaurant",
            price: 25
        },
        {
            image: "https://example.com/food3.jpg",
            title: "Cheeseburger",
            restaurant: "American Diner",
            price: 10
        },
        {
            image: "https://example.com/food4.jpg",
            title: "Pad Thai",
            restaurant: "Thai Cuisine",
            price: 18
        },
        {
            image: "https://example.com/food5.jpg",
            title: "Margherita Pizza",
            restaurant: "Pizzeria Bella",
            price: 12
        },
        {
            image: "https://example.com/food6.jpg",
            title: "Steak Frites",
            restaurant: "French Brasserie",
            price: 30
        },
        {
            image: "https://example.com/food7.jpg",
            title: "Vegetarian Curry",
            restaurant: "Indian Spice",
            price: 20
        },
        {
            image: "https://example.com/food8.jpg",
            title: "Seafood Paella",
            restaurant: "Spanish Tapas",
            price: 35
        }
    ];
    return (
        <div className={`   `}>
            <Navbar/>
            <Routes>
                <Route path={'/'} element={<HomePage/>}></Route>
                <Route path={'/r/:id'} element={<HotelPage/>}></Route>
                <Route path={'/f/:id'} element={<FoodPage/>}></Route>
                <Route path={'/test'} element={<ResPage/>}></Route>
            </Routes>
            <Footer/>
        </div>
    )
}

export default App
