import { FunctionComponent } from "react";
import { getAllCruises } from "../../services/dbFunctions";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"


interface HomeProps {

}

const Home: FunctionComponent<HomeProps> = () => {
    getAllCruises()

    return (
        <section className="container my-5">
            <header>
                <h1 className='text-primary display-1'>Instant Ocean</h1>
                <h2 className='text-secondary'>From booking to sea in a heartbeat!</h2>
            </header>
        </section>
    );
}

export default Home;