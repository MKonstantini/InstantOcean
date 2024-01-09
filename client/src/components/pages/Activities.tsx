import { FunctionComponent } from "react";

interface ActivitiesProps {

}

const Activities: FunctionComponent<ActivitiesProps> = () => {
    return (
        <div style={{ marginTop: "90px" }}>
            <header>
                <h1 className='text-primary display-1'>Onboard Activities</h1>
            </header>
        </div>
    );
}

export default Activities;