import { FunctionComponent } from "react";

interface SearchProps {
    cruisesData: any
}

const Search: FunctionComponent<SearchProps> = ({ cruisesData }) => {
    return (
        <section className="container my-5">
            <header>
                <h1 className='text-primary display-1'>Search</h1>
            </header>
        </section>
    );
}

export default Search;