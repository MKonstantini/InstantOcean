import { FunctionComponent, useContext } from "react";
import Cruise from "../../interfaces/Cruise";
import { CruiseContext } from "../../App";
import { useNavigate } from "react-router-dom";
import FavoritesBtn from "../page_parts/FavoritesBtn"

interface CruisCardProps {
    cruiseNum: number
}

const CruisCard: FunctionComponent<CruisCardProps> = ({ cruiseNum }) => {
    const navigate = useNavigate()
    // context
    const [cruisesData, setCruisesData] = useContext(CruiseContext)
    const cruiseObj: Cruise = cruisesData[cruiseNum - 1]

    // date calculations and formatting
    function addDays(date: Date, days: number) {
        let result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }
    const date1 = new Date(cruiseObj.startDate)
    const date2 = addDays(date1, 7)
    const date3 = addDays(date1, 14)

    return (
        <div className="card position-relative">
            <FavoritesBtn cruiseNum={cruiseNum} />
            {/* img */}
            <img src={cruiseObj.img} className="card-img-top" alt="Missing Cruise Img!" style={{ maxWidth: "30rem", maxHeight: "14rem", objectFit: "cover" }} />
            {/* body */}
            <div className="card-body m-1">
                {/* title */}
                <h3 className="card-title text-center">{cruiseObj.name} | {cruiseObj.duration} DAYS</h3>
                <hr />
                {/* body */}
                <div>
                    <p><i className="fa-solid fa-anchor me-3"></i>Depart From: {cruiseObj.departFrom}</p>
                    <p><i className="fa-solid fa-location-dot me-3"></i>Ports: {cruiseObj.ports}</p>
                    {/* depart dates */}
                    <p className="mt-3 mb-3"><i className="fa-regular fa-calendar-days me-3"></i>Depart Dates:</p>
                    <div className="d-flex justify-content-center">
                        <p className="mx-3">{date1.getDate()}/{date1.getMonth() + 1}/{date1.getFullYear()}</p>
                        <p className="mx-3">{date2.getDate()}/{date2.getMonth() + 1}/{date2.getFullYear()}</p>
                        <p className="mx-3">{date3.getDate()}/{date3.getMonth() + 1}/{date3.getFullYear()}</p>
                    </div>
                    {/* prices */}
                    <p className="mb-1"><i className="fa-solid fa-tags me-3"></i>Prices:</p>
                    <div className="d-flex justify-content-center">
                        <span className="styledSpan">
                            <p className="m-0 text-center">Interior</p>
                            <p className="m-0 text-center">${cruiseObj.startPrice}</p>
                        </span>
                        <span className="styledSpan">
                            <p className="m-0 text-center">Balcony</p>
                            <p className="m-0 text-center">${cruiseObj.startPrice + 50}</p>
                        </span>
                        <span className="styledSpan">
                            <p className="m-0 text-center">Suite</p>
                            <p className="m-0 text-center">${cruiseObj.startPrice + 120}</p>
                        </span>
                    </div>
                </div>
                {/* btn */}
                <hr />
                <div className="d-flex justify-content-center mt-3">
                    <button className="styledBtn" onClick={() => navigate(`/checkout/${cruiseNum}`)}>Book Now</button>
                </div>
            </div>
        </div>
    );
}

export default CruisCard;