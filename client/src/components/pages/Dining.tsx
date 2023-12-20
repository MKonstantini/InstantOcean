import { FunctionComponent } from "react";

interface DiningProps {

}

const Dining: FunctionComponent<DiningProps> = () => {
    return (
        <section className="container my-5">
            <header>
                <h1 className='text-primary display-1'>Dining Rooms</h1>
            </header>
        </section>
    );
}

export default Dining;