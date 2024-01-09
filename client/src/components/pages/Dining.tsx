import { FunctionComponent } from "react";

interface DiningProps {

}

const Dining: FunctionComponent<DiningProps> = () => {
    return (
        <div style={{ marginTop: "90px" }}>
            <header>
                <h1 className='text-primary display-1'>Dining Rooms</h1>
            </header>
        </div>
    );
}

export default Dining;