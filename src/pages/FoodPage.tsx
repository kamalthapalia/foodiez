import FoodDetails from "../components/FoodDetails.tsx";
import cardData from "../utils/Foods.tsx";
import CardGroupScroll from "../components/CardGroupScroll.tsx";

const FoodPage = () => {
    return (
        <div className={`container mx-auto`}>
            <div className={`flex flex-col gap-10`}>
                <FoodDetails/>
                {/*<CardGroup title={`From this Restrurant.`} content={cardData}/>*/}
                <CardGroupScroll title={`Bought together`} content={cardData}/>
                <CardGroupScroll title={`From this Restrurant.`} content={cardData}/>
            </div>
        </div>
    );
};

export default FoodPage;