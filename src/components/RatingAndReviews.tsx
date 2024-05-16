import {FaRegStar} from "react-icons/fa";
import Review from "./Review.tsx";

const RatingAndReviews = () => {
    const reviews = [
        {reviewer: "Alice", rating: 4.5, review: "Great product!"},
        {reviewer: "Bob", rating: 3.8, review: "Could be better."},
        {
            reviewer: "Charlie",
            rating: 5,
            review: "Absolutely amazing! This product has changed my life. It's incredibly well-made and user-friendly. I've been recommending it to all my friends and family."
        },
        {reviewer: "David", rating: 2.5, review: "Disappointed with the quality."},
        {reviewer: "Emily", rating: 4.2, review: "Good value for money."},
        {reviewer: "Frank", rating: 3.7, review: "Average product, nothing special."},
        {reviewer: "Grace", rating: 4.8, review: "Exceeded my expectations! I'm thrilled with my purchase."},
        {reviewer: "Henry", rating: 2.0, review: "Not worth the price. Regret buying it."},
        {reviewer: "Isabel", rating: 4.9, review: "Incredible quality and fast shipping!"},
        {reviewer: "Drake", rating: 3.5, review: "Decent product, but had some minor issues."},
        {
            reviewer: "Olivia",
            rating: 4.7,
            review: "Impressive quality and fast delivery! I'm really happy with my purchase. The product exceeded my expectations, and the customer service was outstanding. Highly recommended to anyone looking for a reliable solution."
        },
        {reviewer: "Kate", rating: 5, review: "Perfection! Couldn't ask for more."},
        {reviewer: "Liam", rating: 4.6, review: "Very satisfied with my purchase. Highly recommended."},
        {reviewer: "Mia", rating: 3.2, review: "It's okay, but not as good as expected."},
        {reviewer: "Noah", rating: 4.3, review: "Happy with the product overall. Good value for the price."}
    ];

    return (
        <div className={`min-h-screen mx-auto w-[800px]`}>

            <div>
                <p className={`text-lg font-bold`}>Reviews</p>
                <button
                    className={`w-full mb-8 mt-3 border-2 rounded-lg text-gray-400 cursor-text text-left font-medium  border-gray-800 p-2`}
                >Leave a review
                </button>
                <div className={`flex flex-col gap-5`}>
                    {reviews?.map((value, index) => (
                        <Review reviewer={value.reviewer} rating={value.rating} review={value.review} key={index}/>))}
                </div>
            </div>
        </div>
    );
};

export default RatingAndReviews;