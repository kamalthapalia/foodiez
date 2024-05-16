import RestrauantDetails from "../components/RestrauantDetails.tsx";
import CardGroup from "../components/CardGroup.tsx";
import cardData from "../utils/Foods.tsx";
import RatingAndReviews from "../components/RatingAndReviews.tsx";

const HotelPage = () => {
    return (
        <div className={`container mx-auto flex flex-col gap-14`}>
            <RestrauantDetails/>
            <CardGroup title={`From this Restrurant`} content={cardData}/>
            <RatingAndReviews/>
        </div>
    );
};

export default HotelPage;