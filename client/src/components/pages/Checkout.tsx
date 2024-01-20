import { FunctionComponent, useContext, useState } from "react";
import { CruiseContext } from "../../App";
import { useParams } from "react-router-dom";

interface CheckoutProps {


}

const Checkout: FunctionComponent<CheckoutProps> = () => {
    const [cruisesData, setCruisesData] = useContext(CruiseContext)
    let dataNum = 0
    const { cruiseNum } = useParams()
    dataNum = parseInt(cruiseNum as string) - 1

    return (
        <div style={{ marginTop: "90px" }}>
            {/* Header Banner */}
            <div className="headerCard bgGradient1 d-flex gap-5 justify-content-center my-4">
                <h1 className="sectionHeader">CHECKOUT</h1>
            </div>

            {/* Cruise Info */}
            <section className="mx-3">
                <div className="text-center">
                    {/* Title */}
                    <h4 className="me-3">
                        <i className="fa-solid fa-anchor me-2"></i>
                        {cruisesData[dataNum].name}
                    </h4>
                    {/* Img */}
                    <img src={cruisesData[dataNum].img} alt="img" style={{ width: 300, borderRadius: 100 }} />
                    {/* Horizontal Ruler */}
                    <div className="d-flex justify-content-center">
                        <hr style={{ width: "160px" }} />
                    </div>
                    {/* All Info */}
                    <div className="text-center">
                        <p>{cruisesData[dataNum].img}</p>
                    </div>
                </div>

            </section>


        </div>
    )
}


export default Checkout;