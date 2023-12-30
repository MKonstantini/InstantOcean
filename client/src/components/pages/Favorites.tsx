import { FunctionComponent, useContext } from "react";
import { CruiseContext } from "../../App";
import PageTopImg from "../page_parts/PageTopImg";

interface FavoritesProps {

}

const Favorites: FunctionComponent<FavoritesProps> = () => {
    const [cruisesData, setCruisesData] = useContext(CruiseContext)

    return (

        <div className="my-5">
            <PageTopImg title="Favorites" subTitle="Your Personal Collection Of Cruises" imgSrc="PageImg-Favorites.jpg" />
        </div >
    );
}

export default Favorites;