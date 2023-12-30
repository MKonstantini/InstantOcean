import { FunctionComponent } from "react";
import PageTopImg from "../page_parts/PageTopImg";

interface AboutProps {

}

const About: FunctionComponent<AboutProps> = () => {
    return (
        <div className="my-5">
            <PageTopImg title="About" subTitle="Creating Something Different" imgSrc="PageImg-About.jpg" />
        </div>
    );
}

export default About;