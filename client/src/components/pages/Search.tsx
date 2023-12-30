import { FunctionComponent, useContext } from "react";
import { CruiseContext } from "../../App";

interface SearchProps {

}

const Search: FunctionComponent<SearchProps> = () => {
    const [cruisesData, setCruisesData] = useContext(CruiseContext)

    return (
        <section className="container my-5">
            <header>
                <h1 className='text-primary display-1'>Search</h1>
            </header>
        </section>
    );
}

export default Search;