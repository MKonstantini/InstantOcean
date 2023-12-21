import { FunctionComponent } from "react";
import { getAllCruises } from "../../services/dbFunctions";

interface HomeProps {

}

const Home: FunctionComponent<HomeProps> = () => {
    getAllCruises()

    return (
        <section className="container my-5">
            <header className="">
                <video src="/client/public/OceanVideo.mp4" width="800" height="400" controls autoPlay loop muted />

                <h1 className='text-primary display-1'>Instant Ocean</h1>
                <h2 className='text-secondary'>From booking to sea in a heartbeat!</h2>
            </header>
        </section>
    );
}

export default Home;