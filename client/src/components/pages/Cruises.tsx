import { FunctionComponent } from "react";

interface CruisesProps {
    cruisesData: any
}

const Cruises: FunctionComponent<CruisesProps> = ({ cruisesData }) => {
    return (
        <section className="container my-5">
            <header>
                <h1 className='text-primary display-1'>Cruises</h1>
            </header>
        </section>
    );
}

export default Cruises;