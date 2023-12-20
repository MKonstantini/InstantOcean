import { FunctionComponent } from "react";

interface CruisesProps {

}

const Cruises: FunctionComponent<CruisesProps> = () => {
    return (
        <section className="container my-5">
            <header>
                <h1 className='text-primary display-1'>Cruises</h1>
            </header>
        </section>
    );
}

export default Cruises;