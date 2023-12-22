import { FunctionComponent } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

interface FormLoginProps {

}

const FormLogin: FunctionComponent<FormLoginProps> = () => {
    let formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: yup.object({
            email: yup.string().email().required(),
            password: yup.string().required(),
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            resetForm()
        }
    })

    return (
        <form onSubmit={formik.handleSubmit} className="d-flex flex-column justify-content-around align-items-center">
            {/* Email */}
            <div className="d-flex flex-column m-2">
                <div className="form-floating m-1">
                    <input
                        className="form-control"
                        id="loginEmail"
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
                        id="loginPassword"
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

            {/* Button */}
            <button
                type="submit"
                disabled={!formik.isValid || !formik.dirty}
                className="btn btn-outline-secondary mt-3 mb-5" style={{ width: "8rem" }}>
                Login
            </button>
        </form>
    );
}

export default FormLogin;