import { FunctionComponent } from "react";

interface ActivitiesProps {

}

const Activities: FunctionComponent<ActivitiesProps> = () => {
    return (
        <section className="container my-5">
            <header>
                <h1 className='text-primary display-1'>Onboard Activities</h1>
            </header>
        </section>
    );
}

export default Activities;