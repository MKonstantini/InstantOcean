import { ChangeEvent, FunctionComponent, useContext, useState } from "react";
import { CruiseContext } from "../../App";
import PageTopImg from "../page_parts/PageTopImg";
import Cruise from "../../interfaces/Cruise";
import CruiseCard from "../page_parts/CruiseCard";

interface SearchProps {

}

const Search: FunctionComponent<SearchProps> = () => {
    const [cruisesData, setCruisesData] = useContext(CruiseContext)
    const [userInput, setUserInput] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserInput(e.target.value)
    }

    const displayResults = (userInput: string) => {
        return (
            cruisesData && (userInput !== '') &&
            <div className="d-flex gap-5 flex-wrap justify-content-center mt-5">
                {
                    cruisesData.map((cruise: Cruise, i: number) => {
                        if (
                            cruise.name.toLowerCase().includes(userInput) ||
                            cruise.ports.toLowerCase().includes(userInput) ||
                            cruise.departFrom.toLowerCase().includes(userInput) ||
                            cruise.duration.toString().includes(userInput) ||
                            cruise.startPrice.toString().includes(userInput)
                        ) {
                            return (
                                <CruiseCard key={i} cruiseNum={cruise.cruiseNum} />
                            )
                        }
                    })
                }
            </div>
        )
    }

    return (
        <div style={{ marginTop: "90px" }}>
            {/* Page Top */}
            <PageTopImg title="Search" subTitle="Find exactly what you're looking for" imgSrc="PageImg-Search.jpg" />

            {/* Header Banner */}
            <div className="headerCard bgGradient1 d-flex gap-5 justify-content-center my-4">
                <h1 className="sectionHeader">Advanced Search</h1>
            </div>

            {/* Search */}
            <h4 className="text-center me-4"><i className="fa-solid fa-magnifying-glass-location me-3"></i>Please Insert Parameter:</h4>
            <div className="d-flex flex-column align-items-center">
                <input
                    type="text"
                    id="userInput"
                    className="form-control text-center w-50 my-1"
                    placeholder="Type Here!"
                    onChange={handleChange}
                    value={userInput} />
            </div>
            <p className="text-center">*Search by cruise name, ports, price, duration...</p>

            {displayResults(userInput)}
        </div>
    );
}

export default Search;