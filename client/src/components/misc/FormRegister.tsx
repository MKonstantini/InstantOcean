import { FunctionComponent } from "react";
import { useFormik } from "formik";
import * as yup from "yup"

interface FormRegisterProps {

}

const FormRegister: FunctionComponent<FormRegisterProps> = () => {
    let formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            accountType: "",
            favorites: []
        },
        validationSchema: yup.object({
            firstname: yup.string().required("first name is a required field"),
            lastname: yup.string().required("last name is a required field"),
            email: yup.string().email().required(),
            password: yup.string().required(),
            accountType: yup.string().required(),
            favorites: yup.array()
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            resetForm()
        }
    })

    return (
        <form onSubmit={formik.handleSubmit} className="d-flex flex-column justify-content-around align-items-center">
            {/* Firstname */}
            <div className="d-flex flex-column m-2">
                <div className="form-floating m-1">
                    <input
                        className="form-control"
                        id="firstname"
                        placeholder="john"
                        type="text"
                        name="firstname"
                        onChange={formik.handleChange}
                        value={formik.values.firstname}
                        onBlur={formik.handleBlur}
                    />
                    <label htmlFor="firstname">First Name</label>

                </div>
                {
                    formik.touched.firstname &&
                    formik.errors.firstname &&
                    <small className="text-center">{formik.errors.firstname}</small>
                }
            </div>

            {/* Lastname */}
            <div className="d-flex flex-column m-2">
                <div className="form-floating m-1">
                    <input
                        className="form-control"
                        id="lastname"
                        placeholder="doe"
                        type="text"
                        name="lastname"
                        onChange={formik.handleChange}
                        value={formik.values.lastname}
                        onBlur={formik.handleBlur}
                    />
                    <label htmlFor="lastname">Last Name</label>

                </div>
                {
                    formik.touched.lastname &&
                    formik.errors.lastname &&
                    <small className="text-center">{formik.errors.lastname}</small>
                }
            </div>

            {/* Email */}
            <div className="d-flex flex-column m-2">
                <div className="form-floating m-1">
                    <input
                        className="form-control"
                        id="email"
                        placeholder="name@example.com"
                        type="text"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                    />
                    <label htmlFor="email">Email Address</label>

                </div>
                {
                    formik.touched.email &&
                    formik.errors.email &&
                    <small className="text-center">{formik.errors.email}</small>
                }
            </div>

            {/* Password */}
            <div className="d-flex flex-column m-2">
                <div className="form-floating m-1">
                    <input
                        className="form-control"
                        id="password"
                        placeholder="password"
                        type="password"
                        name="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                    />
                    <label htmlFor="password">Password</label>

                </div>
                {
                    formik.touched.password &&
                    formik.errors.password &&
                    <small className="text-center">{formik.errors.password}</small>
                }
            </div>

            {/* Account Type */}

            {/* Button */}
            <button
                type="submit"
                disabled={!formik.isValid || !formik.dirty}
                className="btn btn-outline-secondary mt-3 mb-5" style={{ width: "8rem" }}>
                Register
            </button>
        </form>
    );
}

export default FormRegister;