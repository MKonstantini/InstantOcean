import { FunctionComponent, useContext } from "react";
import { CruiseContext } from "../../App";
import PageTopImg from "../page_parts/PageTopImg";

interface SearchProps {

}

const Search: FunctionComponent<SearchProps> = () => {
    const [cruisesData, setCruisesData] = useContext(CruiseContext)

    return (
        <div className="my-5">
            <PageTopImg title="Search" subTitle="Find Exactly What You're Looking For" imgSrc="PageImg-Search.jpg" />
        </div>
    );
}

export default Search;