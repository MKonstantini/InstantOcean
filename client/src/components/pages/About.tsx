import { FunctionComponent } from "react";

interface AboutProps {

}

const About: FunctionComponent<AboutProps> = () => {
    return (
        <section className="container my-5">
            <header>
                <h1 className='text-primary display-1'>About</h1>
            </header>
        </section>
    );
}

export default About;