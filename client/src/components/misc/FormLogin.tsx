import { FunctionComponent, useContext } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { userGetUserInfo, userLogin } from "../../services/dbFunctions";
import User from "../../interfaces/User";
import { alertError, alertSuccess } from "../../services/alertFunctions";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

interface FormLoginProps {

}

const FormLogin: FunctionComponent<FormLoginProps> = () => {
    const [userInfo, setUserInfo] = useContext(UserContext)
    const navigate = useNavigate()

    async function clientLogin(values: any) {
        try {
            // set token and userInfo
            await userLogin(values.email, values.password).then((res) =>
                sessionStorage.setItem("token", res.data)
            )
            await userGetUserInfo(sessionStorage.getItem("token") as string).then((res) => setUserInfo(res.data))

            // client response
            alertSuccess(`Welcome back ${values.email}!`)
            navigate("/")

        } catch (error: any) {
            alertError(error.response.data)
        }
    }

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
            clientLogin(values)
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