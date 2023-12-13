import { FunctionComponent } from "react";

interface HomeProps {

}

const Home: FunctionComponent<HomeProps> = () => {
    return (
        <section>
            <header className='.bg-info-subtle p-5'>
                <h1 className='text-primary display-1'>Instant Ocean</h1>
                <h2 className='text-secondary'>From booking to sea in a heartbeat!</h2>
            </header>
        </section>
    );
}

export default Home;