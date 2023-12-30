import { FunctionComponent, useContext } from "react";
import { CruiseContext } from "../../App";

interface FavoritesProps {

}

const Favorites: FunctionComponent<FavoritesProps> = () => {
    const [cruisesData, setCruisesData] = useContext(CruiseContext)

    return (
        <section className="container my-5">
            <header>
                <h1 className='text-primary display-1'>Favorites</h1>
            </header>
        </section>
    );
}

export default Favorites;