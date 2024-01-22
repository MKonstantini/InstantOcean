import { FunctionComponent, useEffect } from "react";
import PageTopImg from "../page_parts/PageTopImg";

interface AboutProps {

}

const About: FunctionComponent<AboutProps> = () => {
    // scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div style={{ marginTop: "90px" }}>
            {/* Page Top */}
            <PageTopImg title="About" subTitle="Creating something different" imgSrc="PageImg-About.jpg" />

            {/* Header Banner */}
            <div className="headerCard bgGradient1 d-flex gap-5 justify-content-center my-4">
                <h1 className="sectionHeader">Read On The Project</h1>
            </div>

            {/* About Info */}
            <section className="mx-3">
                <div className="text-center">
                    <h4 className="me-3">
                        <i className="fa-solid fa-book me-3"></i>
                        General Info
                    </h4>
                    {/* Opening */}
                    <p className="my-3">Instant Ocean is a webproject by Matan Konstantini, created in REACT TypeScript (MERN Stack)</p>
                    {/* Technologies */}
                    <p className="my-0"><b>Server technologies</b> include: Express, Mongoose, JsonWebToken, Bcryptjs, Lodash</p>
                    <p className="my-0"><b>Client technologies</b> include: Axios, Formik, Yup, Bootstrap, React-Toastify</p>
                    <p className="mb-3"><b>Media</b> from creative-commons sources: Pexels, Unsplash, Imgur</p>
                    {/* Inspiration */}
                    <p className="m-0"><b>Inspiration: </b>This creation is an ode to the ocean, my endless blue muse</p>
                    <p className="my-0">I wanted to create a project that goes beyond the usual web-store,</p>
                    <p className="mb-3">A project with personal interest and depth</p>
                </div>
                {/* Horizontal Ruler */}
                <div className="d-flex justify-content-center">
                    <hr style={{ width: "160px" }} />
                </div>
                {/* How To Use */}
                <div className="text-center mt-3">
                    <h4 className="me-3 mt-3">
                        <i className="fa-solid fa-circle-info me-3"></i>
                        How To Use
                    </h4>
                    {/* Favorites */}
                    <div>
                        <p className="mt-3 mb-1 fw-bold">Favorites:</p>
                        <p className="my-0">Available for: Any logged in user</p>
                        <p className="my-0">Favorites is a page that displays all the cruise card that the user has favorited (using the heart button)</p>
                        <p>Within the page the user can remove cruises from their favorites by clicking the heart button</p>
                    </div>
                    {/* Admin Tools */}
                    <div>
                        <p className="mt-4 mb-1 fw-bold">Admin Tools:</p>
                        <p className="my-0">Available for: Admin users</p>
                        <p className="my-0">Admin Tools is a page where admin users can edit the cruises displayed on the webpage</p>
                        <p>Utilizing CRUD commands to edit, add and delete from the database </p>
                    </div>
                </div>
                {/* Horizontal Ruler */}
                <div className="d-flex justify-content-center">
                    <hr style={{ width: "160px" }} />
                </div>
                {/* FAQ */}
                <div className="text-center mt-3 mb-5">
                    <h4 className="me-3">
                        <i className="fa-solid fa-question me-3"></i>
                        FAQ
                    </h4>
                    <div>
                        {/* Q1 */}
                        <p className=" fw-bold my-1"><i>How long did this project take to make?</i></p>
                        <p className="mb-3">1 month</p>
                        {/* Q2 */}
                        <p className=" fw-bold my-1"><i>Who designed the logo?</i></p>
                        <p className="my-0">Me!</p>
                    </div>
                </div>
            </section>
        </div >
    );
}

export default About;