import { FunctionComponent } from "react";

interface NotFoundProps {

}

const NotFound: FunctionComponent<NotFoundProps> = () => {
    console.log()
    return (
        <section className="container my-5">
            <h1 className="display-1 text-primary">Error 404</h1>
            <h2 className="text-secondary">Page Not Found!</h2>
        </section>
    );
}

export default NotFound;