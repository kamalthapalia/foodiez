import cardData from "../utils/Foods.tsx";
import RatingAndReviews from "../components/RatingAndReviews.tsx";
import ResDetailsAdmin from "../components/res/ResDetailsAdmin.tsx";
import CardGroupRes from "../components/res/CardGroupRes.tsx";

const ResPage = () => {
    return (
        <div className={`container mx-auto flex flex-col gap-14 my-8`}>
            <ResDetailsAdmin/>
            <CardGroupRes title={`My Products`} content={cardData}/>
            <RatingAndReviews/>
        </div>
    );
};

export default ResPage;