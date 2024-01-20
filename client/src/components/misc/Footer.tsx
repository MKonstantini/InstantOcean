import { FunctionComponent } from "react";

interface FooterProps {

}

const Footer: FunctionComponent<FooterProps> = () => {
    return (
        // Must include: logo, licence/rights, socials, links...
        <footer className="d-flex gap-5 justify-content-around">
            <div className="m-5 d-flex justify-content-center align-baseline">
                <img src="Logo.svg" alt="logo" className="me-2" />
                <h5>Instant Ocean</h5>
            </div>
            <div>2</div>
            <div>3</div>
        </footer>
    );
}

export default Footer;