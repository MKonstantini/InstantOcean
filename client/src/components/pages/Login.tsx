import { FunctionComponent } from "react";

interface LoginProps {

}

const Login: FunctionComponent<LoginProps> = () => {
    return (
        <section className="container my-5">
            <header>
                <h1 className='text-primary display-1'>Login</h1>
            </header>
        </section>
    );
}

export default Login;