import { FunctionComponent, useContext } from "react";
import FormRegister from "../misc/FormRegister";
import FormLogin from "../misc/FormLogin";
import { AdminContext, LoginContext } from "../../App";

interface LoginProps {

}

const Login: FunctionComponent<LoginProps> = () => {
    // Get Context
    const [isLoggedIn, setIsLoggedIn] = useContext(LoginContext)
    const [isAdmin, setIsAdmin] = useContext(AdminContext)

    return (
        <div className="d-flex flex-wrap justify-content-center position-relative">
            {/* Background Img */}
            <img src="LoginImg1.jpg" alt="loginImg" className="generalFill" />

            {/* Leftside - Login */}
            <div className="text-center m-5 p-2" style={{ backgroundColor: "white", border: "1px solid lightgrey", borderRadius: "20px", maxWidth: "330px" }}>
                <header className="my-5">
                    <i className="fa-solid fa-circle-user mb-2" style={{ fontSize: "2rem" }}></i>
                    <h1>Login</h1>
                    <h5 className="fst-italic fw-bold">Welcome Back!</h5>
                </header>

                <FormLogin />

                {/* Demo Users */}
                <div>
                    <h5>Demo Users</h5>
                    {/* Regular */}
                    <button type="button" className="btn btn-outline-primary mt-4" style={{ width: "12rem" }}> <i className="fa-solid fa-user me-2"></i>Demo Regular User</button>
                    {/* Admin */}
                    <button type="button" className="btn btn-outline-primary mt-4 mb-5" style={{ width: "12rem" }}><i className="fa-solid fa-user-tie me-2"></i>Demo Admin User</button>
                </div>
            </div>

            {/* Rightside - Register */}
            <div className="text-center m-5 px-5 pt-2" style={{ backgroundColor: "white", border: "1px solid lightgrey", borderRadius: "20px", maxWidth: "330px" }}>
                <header className="my-5">
                    <i className="fa-solid fa-user-plus my-2" style={{ fontSize: "1.6rem" }}></i>
                    <h1>Register</h1>
                    <h5 className="fst-italic fw-bold">Adventure Awaits!</h5>
                </header>

                <FormRegister />
            </div>

        </div >
    );
}

export default Login;