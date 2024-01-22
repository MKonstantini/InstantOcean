import { FunctionComponent, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CruisCard from "../page_parts/CruiseCard";
import { CruiseContext } from "../../App";
import Cruise from "../../interfaces/Cruise";

interface HomeProps {

}

const Home: FunctionComponent<HomeProps> = () => {
    const [cruisesData, setCruisesData] = useContext(CruiseContext)
    const navigate = useNavigate()

    // scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div style={{ marginTop: "90px" }}>
            {/* VideoCard */}
            <section className="vidCard">
                <video className="vidPlayer" src="OceanVideo.mp4" autoPlay loop muted />
                <div className="gradientOverlay"></div>
                <div className="vidText">
                    <h1>Instant Ocean</h1>
                    <h2>From booking to cruising in a heartbeat</h2>
                    <button onClick={() => navigate('cruises')} className="btn btn-light mt-4 px-5 py-2">Book Now</button>
                </div>
            </section>

            {/* Special Offers */}
            <section className="my-4">
                {/* Header Card */}
                <div className="headerCard bgGradient1 d-flex gap-5 justify-content-center mb-4">
                    <div style={{ width: "80px" }}></div>
                    <div>
                        <h1 className="sectionHeader">Special Offers</h1>
                        <h2 className="text-center">Experience World-Class Cruises at Exclusive Savings!</h2>
                    </div>
                    <div><i className="fa-solid fa-tags"></i></div>
                </div>
                {/* 3 CruiseCards */}
                <div className="d-flex justify-content-center flex-wrap mt-4">
                    {
                        cruisesData ?
                            <div className="d-flex gap-5 flex-wrap justify-content-center">
                                {
                                    cruisesData.map((cruise: Cruise, i: number) => {
                                        if (i < 3) return (
                                            <CruisCard key={i} cruiseNum={cruise.cruiseNum} />
                                        )
                                    })
                                }
                            </div>
                            : <p>Awaiting Data</p>
                    }
                </div>
            </section>

            {/* Call To Login */}
            <section className="mt-5 mb-4">
                {/* Header Card */}
                <div className="headerCard bgGradient2 d-flex gap-5 justify-content-center">
                    <div style={{ width: "80px" }}></div>
                    <div>
                        <h1 className="sectionHeader">Sign In - Get More</h1>
                        <h2 className="text-center">Access Special Features By Logging In!</h2>
                        <h2 className="text-center">Demo Accounts Included</h2>
                    </div>
                    <div><i className="fa-solid fa-user mt-4"></i></div>
                </div>
            </section>

            {/* Sales Pitch Section?*/}
            {/* Ocean-Phobia Section? */}
        </div>
    );
}

export default Home;