import { FunctionComponent, useContext } from "react";
import { CruiseContext } from "../../App";
import PageTopImg from "../page_parts/PageTopImg";
import Cruise from "../../interfaces/Cruise";
import CruisCard from "../page_parts/CruiseCard";

interface CruisesProps {

}

const Cruises: FunctionComponent<CruisesProps> = () => {
    const [cruisesData, setCruisesData] = useContext(CruiseContext)

    return (
        <div className="my-5">
            {/* Page Top */}
            <PageTopImg imgSrc="PageImg-Cruises.jpg" title="Cruises" subTitle="Explore The Ocean Your Way" />
            {/* Filter */}
            <div><h1>Filter</h1></div>

            {/* Displayed Cruises */}
            {
                cruisesData ?
                    <div className="d-flex gap-5 flex-wrap justify-content-center mt-5">
                        {
                            cruisesData.map((cruise: Cruise, i: number) => {
                                return (
                                    <CruisCard key={i} cruiseNum={cruise.cruiseNum} />
                                )
                            })
                        }
                    </div>
                    :
                    <p>Awaiting Data</p>
            }
        </div>
    );
}

export default Cruises;