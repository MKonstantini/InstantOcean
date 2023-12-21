import { FunctionComponent } from "react";
import FormRegister from "../misc/FormRegister";

interface LoginProps {

}

const Login: FunctionComponent<LoginProps> = () => {
    return (
        <div className="d-flex flex-wrap justify-content-center">
            {/* Login */}
            <div className="text-center m-5 p-5" style={{ backgroundColor: "white", border: "1px solid lightgrey", borderRadius: "20px", maxWidth: "330px" }}>
                <header className="my-5">
                    <h1>Login</h1>
                    <h5>Welcome Back!</h5>
                </header>
                <FormRegister />
            </div>

            {/* Register */}
            <div className="text-center m-5 p-5" style={{ backgroundColor: "white", border: "1px solid lightgrey", borderRadius: "20px", maxWidth: "330px" }}>
                <header className="my-5">
                    <h1>Register</h1>
                    <h5>Welcome Aboard!</h5>
                </header>
                <FormRegister />
            </div>

        </div >

    );
}

export default Login;