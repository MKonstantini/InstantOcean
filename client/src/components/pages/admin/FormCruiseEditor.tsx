import { FunctionComponent, useContext } from "react";
import { FormikProvider, useFormik } from "formik";
import * as yup from "yup"
import { cruiseDelete, cruisePatch } from "../../../services/dbFunctions";
import { useNavigate } from "react-router-dom";
import { alertSuccess, alertError } from "../../../services/alertFunctions";
import { CruiseContext } from "../../../App";
import Cruise from "../../../interfaces/Cruise";


interface FormCruiseEditorProps {
    initialCruise: Cruise
}

const FormCruiseEditor: FunctionComponent<FormCruiseEditorProps> = ({ initialCruise }) => {
    // Get Context
    const [cruisesData, setCruisesData] = useContext(CruiseContext)
    const navigate = useNavigate()

    async function patchCruise(cruise: Cruise) {
        try {
            // db function
            await cruisePatch(cruise)

            // client response
            alertSuccess(`Success! Cruise has been edited. Data will be updated shortly`)
            navigate("/")
        }
        catch (error: any) {
            alertError(error.response.data)
        }
    }

    // date formatter to DD/MM/YYYY
    const dateFormatter = (dateStr: string) => {
        const date = new Date(dateStr)
        return (
            `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
        )
    }

    // delete cruise
    async function deleteCruise() {
        try {
            // db function
            await cruiseDelete(initialCruise.cruiseNum)

            // client response
            alertSuccess(`Success! Cruise has been deleted. Data will be updated shortly`)
            navigate("/")
        }
        catch (error: any) {
            alertError(error.response.data)
        }
    }

    let formik = useFormik({
        initialValues: {
            cruiseNum: initialCruise.cruiseNum,
            name: initialCruise.name,
            duration: initialCruise.duration,
            departFrom: initialCruise.departFrom,
            ports: initialCruise.ports,
            img: initialCruise.img,
            startDate: initialCruise.startDate,
            startPrice: initialCruise.startPrice
        },
        validationSchema: yup.object({
            cruiseNum: yup.number().required(),
            name: yup.string().required(),
            duration: yup.number(),
            departFrom: yup.string().required(),
            ports: yup.string().required(),
            img: yup.string().required(),
            startDate: yup.string().required(),
            startPrice: yup.number()
        }),
        onSubmit: (values, { resetForm }) => {
            patchCruise(values)
            resetForm()
        }
    })

    return (
        <FormikProvider value={formik}>
            <form onSubmit={formik.handleSubmit} className="d-flex flex-column">
                <div className="d-flex">
                    {/* Name */}
                    <div className="d-flex flex-column m-2">
                        <div className="form-floating m-1">
                            <input
                                className="form-control"
                                id="name"
                                placeholder="cruiseName"
                                type="text"
                                name="name"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                onBlur={formik.handleBlur}
                            />
                            <label htmlFor="name">Name</label>

                        </div>
                        {
                            formik.touched.name &&
                            formik.errors.name &&
                            <small className="text-center">{formik.errors.name}</small>
                        }
                    </div>

                    {/* duration */}
                    <div className="d-flex flex-column m-2">
                        <div className="form-floating m-1">
                            <input
                                className="form-control"
                                id="duration"
                                placeholder="duraion"
                                type="number"
                                name="duration"
                                onChange={formik.handleChange}
                                value={formik.values.duration}
                                onBlur={formik.handleBlur}
                            />
                            <label htmlFor="duration">Duration (Days)</label>

                        </div>
                        {
                            formik.touched.duration &&
                            formik.errors.duration &&
                            <small className="text-center">{formik.errors.duration}</small>
                        }
                    </div>
                </div>

                <div className="d-flex">
                    {/* departFrom */}
                    <div className="d-flex flex-column m-2">
                        <div className="form-floating m-1">
                            <input
                                className="form-control"
                                id="departFrom"
                                placeholder="departFrom"
                                type="text"
                                name="departFrom"
                                onChange={formik.handleChange}
                                value={formik.values.departFrom}
                                onBlur={formik.handleBlur}
                            />
                            <label htmlFor="departFrom">Depart From</label>

                        </div>
                        {
                            formik.touched.departFrom &&
                            formik.errors.departFrom &&
                            <small className="text-center">{formik.errors.departFrom}</small>
                        }
                    </div>

                    {/* ports */}
                    <div className="d-flex flex-column m-2">
                        <div className="form-floating m-1">
                            <input
                                className="form-control"
                                id="ports"
                                placeholder="ports"
                                type="text"
                                name="ports"
                                onChange={formik.handleChange}
                                value={formik.values.ports}
                                onBlur={formik.handleBlur}
                            />
                            <label htmlFor="ports">Ports</label>

                        </div>
                        {
                            formik.touched.ports &&
                            formik.errors.ports &&
                            <small className="text-center">{formik.errors.ports}</small>
                        }
                    </div>
                </div>

                <div className="d-flex">
                    {/* img */}
                    <div className="d-flex flex-column m-2">
                        <div className="form-floating m-1">
                            <input
                                className="form-control"
                                id="img"
                                placeholder="img"
                                type="text"
                                name="img"
                                onChange={formik.handleChange}
                                value={formik.values.img}
                                onBlur={formik.handleBlur}
                            />
                            <label htmlFor="img">Picture Link</label>

                        </div>
                        {
                            formik.touched.img &&
                            formik.errors.img &&
                            <small className="text-center">{formik.errors.ports}</small>
                        }
                    </div>

                    {/* startDate */}
                    <div className="d-flex flex-column m-2">
                        <div className="form-floating m-1">
                            <input
                                className="form-control"
                                id="startDate"
                                placeholder="startDate"
                                type="text"
                                name="startDate"
                                onChange={formik.handleChange}
                                value={dateFormatter(formik.values.startDate)}
                                onBlur={formik.handleBlur}
                            />
                            <label htmlFor="startDate">Nearest Date</label>

                        </div>
                        {
                            formik.touched.startDate &&
                            formik.errors.startDate &&
                            <small className="text-center">{formik.errors.ports}</small>
                        }
                    </div>
                </div>

                <div className="d-flex">
                    {/* startPrice */}
                    <div className="d-flex flex-column m-2">
                        <div className="form-floating m-1">
                            <input
                                className="form-control"
                                id="startPrice"
                                placeholder="startPrice"
                                type="text"
                                name="startPrice"
                                onChange={formik.handleChange}
                                value={formik.values.startPrice}
                                onBlur={formik.handleBlur}
                            />
                            <label htmlFor="startPrice">Starting Price ($)</label>
                        </div>
                        {
                            formik.touched.startPrice &&
                            formik.errors.startPrice &&
                            <small className="text-center">{formik.errors.ports}</small>
                        }
                    </div>
                </div>

                <div className="d-flex justify-content-evenly">
                    {/* Buttons */}
                    <button
                        type="button"
                        disabled={!formik.isValid}
                        className="btn btn-outline-secondary mt-3 mb-5" style={{ width: "6rem" }}
                        onClick={() => navigate(-1)}>
                        <i className="fa-solid fa-arrow-left me-2"></i>
                        Back
                    </button>
                    <button
                        type="submit"
                        disabled={!formik.isValid}
                        className="btn btn-outline-secondary mt-3 mb-5" style={{ width: "11rem" }}>
                        <i className="fa-solid fa-check me-2"></i>
                        Confirm Changes
                    </button>
                    <button
                        type="button"
                        onClick={deleteCruise}
                        className="btn btn-outline-danger mt-3 mb-5" style={{ width: "6rem" }}>
                        <i className="fa-solid fa-trash me-2"></i>
                        Delete
                    </button>
                </div>
            </form>
        </FormikProvider>
    );
}

export default FormCruiseEditor;