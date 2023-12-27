import { FunctionComponent, useContext } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { AdminContext, LoginContext } from "../../App";
import { userGetUserInfo, userLogin } from "../../services/dbFunctions";
import User from "../../interfaces/User";
import { alertError, alertSuccess } from "../../services/alertFunctions";
import { useNavigate } from "react-router-dom";

interface FormLoginProps {

}

const FormLogin: FunctionComponent<FormLoginProps> = () => {
    // Get Context
    const [isLoggedIn, setIsLoggedIn] = useContext(LoginContext)
    const [isAdmin, setIsAdmin] = useContext(AdminContext)

    const navigate = useNavigate()

    async function clientLogin(values: any) {
        try {
            // get and set token (token required for check admin)
            let token!: string
            await userLogin(values.email, values.password).then((res) =>
                token = res.data)
            sessionStorage.setItem("token", token)

            // check admin
            let accountType!: string
            await userGetUserInfo(token).then((res) => accountType = res.data.accountType)
            accountType === "admin" ? setIsAdmin(true) : setIsAdmin(false)

            // client response
            alertSuccess(`Welcome back ${values.email}!`)
            setIsLoggedIn(true)
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