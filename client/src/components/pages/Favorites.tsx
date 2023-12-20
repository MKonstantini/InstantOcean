import { FunctionComponent } from "react";

interface FavoritesProps {

}

const Favorites: FunctionComponent<FavoritesProps> = () => {
    return (
        <section className="container my-5">
            <header>
                <h1 className='text-primary display-1'>Favorites</h1>
            </header>
        </section>
    );
}

export default Favorites;