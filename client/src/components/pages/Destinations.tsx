import { FunctionComponent } from "react";

interface DestinationsProps {

}

const Destinations: FunctionComponent<DestinationsProps> = () => {
    return (
        <div style={{ marginTop: "90px" }}>
            <header>
                <h1 className='text-primary display-1'>Destinations</h1>
            </header>
        </div>
    );
}

export default Destinations;