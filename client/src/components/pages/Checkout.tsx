import { FunctionComponent, useContext, useEffect, useState } from "react";
import { CruiseContext } from "../../App";
import { useNavigate, useParams } from "react-router-dom";
import { Field, FormikProvider, useFormik } from "formik";
import * as yup from "yup"
import { alertSuccess } from "../../services/alertFunctions";

interface CheckoutProps {


}

const Checkout: FunctionComponent<CheckoutProps> = () => {
    const navigate = useNavigate()
    const [cruisesData, setCruisesData] = useContext(CruiseContext)
    let dataNum = 0
    const { cruiseNum } = useParams()
    dataNum = parseInt(cruiseNum as string) - 1

    // date calculations and formatting
    function addDays(date: Date, days: number) {
        let result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }
    // date constants (types date & string)
    const date1 = new Date(cruisesData[dataNum].startDate)
    const date2 = addDays(date1, 7)
    const date3 = addDays(date1, 14)
    const date1Str = `${date1.getDate()}/${date1.getMonth() + 1}/${date1.getFullYear()}`
    const date2Str = `${date2.getDate()}/${date2.getMonth() + 1}/${date2.getFullYear()}`
    const date3Str = `${date3.getDate()}/${date3.getMonth() + 1}/${date3.getFullYear()}`

    // form
    let formik = useFormik({
        initialValues: {
            price: cruisesData[dataNum].startPrice as string,
            date: date1Str,
        },
        validationSchema: yup.object({
            price: yup.string().required(),
            date: yup.string().required()
        }),
        onSubmit: (values, { resetForm }) => {
            resetForm()
        }
    })


    return (
        <div style={{ marginTop: "90px" }}>
            {/* Header Banner */}
            <div className="headerCard bgGradient1 d-flex gap-5 justify-content-center my-4">
                <h1 className="sectionHeader">CHECKOUT</h1>
            </div>

            {/* Cruise Info */}
            <section className="mx-3 text-center">
                {/* Title */}
                <h4 className="me-3 my-5">
                    <i className="fa-solid fa-anchor me-2"></i>
                    {cruisesData[dataNum].name}
                </h4>
                {/* Img */}
                <img src={cruisesData[dataNum].img} alt="img" style={{ width: 300, borderRadius: 100 }} className="mb-3 mt-1" />
                {/* Horizontal Ruler */}
                <div className="d-flex justify-content-center mb-3">
                    <hr style={{ width: "160px" }} />
                </div>
                {/* Details */}
                <div className="text-center my-3">
                    <h5>Cruise Details:</h5>
                    <p>Travel Ports: {cruisesData[dataNum].ports}</p>
                    <p>Departure Port: {cruisesData[dataNum].departFrom}</p>
                    <p>Duration: {cruisesData[dataNum].duration} Days</p>
                    {/* Horizontal Ruler */}
                    <div className="d-flex justify-content-center">
                        <hr style={{ width: "160px" }} />
                    </div>
                </div>
            </section>

            {/* Purchase Options */}
            <section className="mx-3 text-center">
                {/* Title */}
                <h5>Purchase Options:</h5>
                {/* Form */}
                <FormikProvider value={formik}>
                    <form>
                        {/* Prices */}
                        <div className="my-3">
                            <p className="mb-1">Prices:</p>
                            <p>Interior | Balcony | Suite </p>
                            <div role="group" aria-labelledby="prices">
                                <label>
                                    <Field
                                        type="radio"
                                        name="price"
                                        value="1"
                                        className="me-2"
                                        checked
                                    />
                                    $ {cruisesData[dataNum].startPrice} (Int.)
                                </label>
                                <label>
                                    <Field
                                        type="radio"
                                        name="price"
                                        value="2"
                                        className="me-2 ms-3"
                                    />
                                    $ {cruisesData[dataNum].startPrice + 50 as string} (Balc.)
                                </label>
                                <label>
                                    <Field
                                        type="radio"
                                        name="price"
                                        value="3"
                                        className="me-2 ms-3"
                                    />
                                    $ {cruisesData[dataNum].startPrice + 120} (Suite)
                                </label>
                            </div>
                        </div>
                        {/* Dates */}
                        <div className="my-3">
                            <p className="mb-1">Boarding Dates:</p>
                            <div role="group" aria-labelledby="dates">
                                <label>
                                    <Field
                                        type="radio"
                                        name="date"
                                        value={date1Str}
                                        className="me-2"
                                    />
                                    {date1Str}
                                </label>
                                <label>
                                    <Field
                                        type="radio"
                                        name="date"
                                        value={date2Str}
                                        className="me-2 ms-3"
                                    />
                                    {date2Str}
                                </label>
                                <label>
                                    <Field
                                        type="radio"
                                        name="date"
                                        value={date3Str}
                                        className="me-2 ms-3"
                                    />
                                    {date3Str}
                                </label>
                            </div>
                        </div>
                    </form>
                </FormikProvider>
            </section>

            {/* Horizontal Ruler */}
            <div className="d-flex justify-content-center my-3">
                <hr style={{ width: "160px" }} />
            </div>

            <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-outline-success py-2 px-4" onClick={() => {
                    alertSuccess("Purchase Successful! See you on board!")
                    navigate("/")
                }}>
                    Purchase
                </button>
            </div>
        </div>
    )
}


export default Checkout;