import { FunctionComponent, useContext, useEffect } from "react";
import { CruiseContext, UserContext } from "../../App";
import PageTopImg from "../page_parts/PageTopImg";
import { useNavigate } from "react-router-dom";
import Cruise from "../../interfaces/Cruise";
import CruiseCard from "../page_parts/CruiseCard";

interface FavoritesProps {

}

const Favorites: FunctionComponent<FavoritesProps> = () => {
    const [cruisesData, setCruisesData] = useContext(CruiseContext)
    const [userInfo, setUserInfo] = useContext(UserContext)

    const navigate = useNavigate()
    useEffect(() => {
        if (!userInfo) navigate(-1)
    }, [])

    return (
        <div className="my-5">
            {/* Page Top */}
            <PageTopImg title="Favorites" subTitle="Your personal collection" imgSrc="PageImg-Favorites.jpg" />

            {/* Header Banner */}
            <div className="headerCard bgGradient1 d-flex gap-5 justify-content-center my-4">
                <h1 className="sectionHeader">Browse & Manage Favorites</h1>
            </div>

            {/* Cards Display */}
            {
                cruisesData && userInfo &&
                <div className="d-flex gap-5 flex-wrap justify-content-center mt-5">
                    {
                        cruisesData.map((cruise: Cruise, i: number) => {
                            if (
                                userInfo.favorites.includes(cruise.cruiseNum)
                            ) {
                                return (
                                    <CruiseCard key={i} cruiseNum={cruise.cruiseNum} />
                                )
                            }
                        })
                    }
                </div>
            }

        </div >
    );
}

export default Favorites;