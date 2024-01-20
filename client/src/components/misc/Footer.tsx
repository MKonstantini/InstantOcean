import { FunctionComponent } from "react";

interface FooterProps {

}

const Footer: FunctionComponent<FooterProps> = () => {
    return (
        // Must include: logo, licence/rights, socials, links...
        <footer className="d-flex gap-5 justify-content-center flex-wrap">
            <div className="m-5 d-flex justify-content-center align-baseline">
                <img src="Logo.svg" alt="logo" className="me-2" />
                <h5 className="mt-3">Instant Ocean</h5>
            </div>

            <div className="m-5 text-center ms-1">
                <p className="mb-1">Explore:</p>
                <div>
                    <a href="/home" className="m-2 text-dark">Home</a>
                    <a href="/cruises" className="m-2 text-dark">Cruises</a>
                    <a href="/about" className="m-2 text-dark">About</a>
                    <a href="/search" className="m-2 text-dark">Search</a>
                </div>
            </div>

            <div className="m-5">
                <p className="text-center mb-1">Socials:</p>
                <div>
                    <i className="m-2 fa-brands fa-meta"></i>
                    <i className="m-2 fa-brands fa-youtube"></i>
                    <i className="m-2 fa-brands fa-tiktok"></i>
                    <i className="m-2 fa-brands fa-twitter"></i>
                </div>
            </div>
        </footer>
    );
}

export default Footer;