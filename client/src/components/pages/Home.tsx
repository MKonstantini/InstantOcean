import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

interface HomeProps {
    cruisesData: any
}

const Home: FunctionComponent<HomeProps> = ({ cruisesData }) => {
    const navigate = useNavigate()

    return (
        <div>
            {/* VideoCard */}
            <section className="vidCard">
                <video className="vidPlayer" src="OceanVideo.mp4" width="800" height="400" autoPlay loop muted />
                <div className="vidOverlay"></div>
                <div className="vidText">
                    <h1 style={{ fontWeight: "800" }}>Instant Ocean</h1>
                    <h2>From booking to sea in a heartbeat</h2>
                    <button onClick={() => navigate('cruises')} className="btn btn-light mt-4 px-5 py-2">Book Now</button>
                </div>
            </section>

            {/* Special Offers */}
            <section className="py-4">
                {/* Header Card */}
                <div className="headerCard d-flex gap-5 justify-content-center">
                    <div style={{ width: "80px" }}></div>
                    <div>
                        <h1 className="sectionHeader">Special Offers</h1>
                        <h2 className="text-center">Experience World-Class Cruises at Exclusive Savings!</h2>
                    </div>
                    <div><i className="fa-solid fa-tags"></i></div>
                </div>
                {/* 3 CruiseCards */}

            </section>

            {/* Ocean-Phobia */}
            <section></section>

            {/* Code Redeem */}
            <section></section>

            {/* Call To Resgister */}
            <section></section>

            {/* Sales Pitch */}
            <section></section>

        </div>
    );
}

export default Home;