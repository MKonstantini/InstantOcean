import { FunctionComponent } from "react";

interface NotFoundProps {

}

const NotFound: FunctionComponent<NotFoundProps> = () => {
    console.log()
    return (
        <section>
            <h1 className="display-1 text-primary">Error 404</h1>
            <h2>Page Not Found!</h2>
        </section>
    );
}

export default NotFound;