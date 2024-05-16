import Hero from "../components/Hero.tsx";
import CardGroup from "../components/CardGroup.tsx";
import cardData from "../utils/Foods.tsx";

const HomePage = () => {
    return (
        <div>
            <Hero/>
            <CardGroup title={`Snacks`} content={cardData}/>
        </div>
    );
};

export default HomePage;