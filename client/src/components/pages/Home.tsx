import { FunctionComponent } from "react";
import { getAllCruises } from "../../services/dbFunctions";

import logo from "../../assets/Gengar like a sir11.jpg"

interface HomeProps {

}

const Home: FunctionComponent<HomeProps> = () => {
    getAllCruises()

    return (
        <section className="container my-5">
            <header className="">
                <img src={logo} width="900px" height="200px" alt="" />

                <video src="../../assets/cover_video.mp4" width="800" height="400" controls autoPlay loop muted />

                <h1 className='text-primary display-1'>Instant Ocean</h1>
                <h2 className='text-secondary'>From booking to sea in a heartbeat!</h2>
            </header>
        </section>
    );
}

export default Home;