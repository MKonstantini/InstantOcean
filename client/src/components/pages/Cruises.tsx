import { ChangeEvent, FunctionComponent, useContext, useState } from "react";
import { CruiseContext } from "../../App";
import PageTopImg from "../page_parts/PageTopImg";
import Cruise from "../../interfaces/Cruise";
import CruiseCard from "../page_parts/CruiseCard";

interface CruisesProps {

}

const Cruises: FunctionComponent<CruisesProps> = () => {
    // Get Context
    const [cruisesData, setCruisesData] = useContext(CruiseContext)

    // React Radio Handling Functions
    const [selectedFilter, setSelectedFilter] = useState("0")
    const isFilterSelected = (value: string) => selectedFilter === value
    const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => setSelectedFilter(e.currentTarget.value)
    // Display Filter
    const displaySelectedRadio = (selectedFilter: string) => {
        switch (selectedFilter) {
            case "0":
                return (
                    cruisesData &&
                    <div className="d-flex gap-5 flex-wrap justify-content-center mt-5" >
                        {
                            cruisesData.map((cruise: Cruise, i: number) =>
                                <CruiseCard key={i} cruiseNum={cruise.cruiseNum} />
                            )
                        }
                    </div>
                )
            case "1":
                return (
                    cruisesData &&
                    <div className="d-flex gap-5 flex-wrap justify-content-center mt-5">
                        {
                            cruisesData.map((cruise: Cruise, i: number) => {
                                if (cruise.startPrice <= 249) {
                                    return (
                                        <CruiseCard key={i} cruiseNum={cruise.cruiseNum} />
                                    )
                                }
                            })
                        }
                    </div>
                )
            case "2":
                return (
                    cruisesData &&
                    <div className="d-flex gap-5 flex-wrap justify-content-center mt-5">
                        {
                            cruisesData.map((cruise: Cruise, i: number) => {
                                if (cruise.startPrice <= 499 && cruise.startPrice >= 250) return (
                                    <CruiseCard key={i} cruiseNum={cruise.cruiseNum} />
                                )
                            })
                        }
                    </div>
                )
            case "3":
                return (
                    cruisesData &&
                    <div className="d-flex gap-5 flex-wrap justify-content-center mt-5">
                        {
                            cruisesData.map((cruise: Cruise, i: number) => {
                                if (cruise.startPrice >= 500) return (
                                    <CruiseCard key={i} cruiseNum={cruise.cruiseNum} />
                                )
                            })
                        }
                    </div>
                )
        }
    }

    return (
        <div style={{ marginTop: "90px" }}>
            {/* Page Top */}
            <PageTopImg imgSrc="PageImg-Cruises.jpg" title="Cruises" subTitle="Explore everything" />

            {/* Header Card */}
            <div className="headerCard bgGradient1 d-flex gap-5 justify-content-center my-4">
                <h1 className="sectionHeader">Choose Your Filter</h1>
            </div>

            {/* Filters */}
            <h4 className="text-center me-4"><i className="fa-solid fa-tags me-3"></i>Starting Price:</h4>
            <form className="mt-4 d-flex justify-content-center flex-wrap">
                <div className="d-flex">
                    <input type="radio" className="btn-check" id="radio0" name="radioFilter" value="0" checked={isFilterSelected("0")} onChange={handleRadioChange} />
                    <label htmlFor="radio0" className="btn btn-outline-secondary rounded-5 px-3 me-2">
                        <i className="fa-solid fa-list me-2"></i>
                        All
                    </label>

                    <input type="radio" className="btn-check" id="radio1" name="radioFilter" value="1" checked={isFilterSelected("1")} onChange={handleRadioChange} />
                    <label htmlFor="radio1" className="btn btn-outline-secondary rounded-5 me-2">
                        &lt; $250
                    </label>

                    <input type="radio" className="btn-check" id="radio2" name="radioFilter" value="2" checked={isFilterSelected("2")} onChange={handleRadioChange} />
                    <label htmlFor="radio2" className="btn btn-outline-secondary rounded-5 me-2 d-flex align-items-center">
                        <span>
                            $250 - $499
                        </span>
                    </label>

                    <input type="radio" className="btn-check" id="radio3" name="radioFilter" value="3" checked={isFilterSelected("3")} onChange={handleRadioChange} />
                    <label htmlFor="radio3" className="btn btn-outline-secondary rounded-5 me-2 d-flex align-items-center">
                        <span>
                            $500 +
                        </span>
                    </label>
                </div>
            </form>

            {/* Card Showcase */}
            {displaySelectedRadio(selectedFilter)}
        </div>
    );
}

export default Cruises;