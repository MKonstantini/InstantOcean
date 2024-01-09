import { FunctionComponent } from "react";

interface NotFoundProps {

}

const NotFound: FunctionComponent<NotFoundProps> = () => {
    console.log()
    return (
        <div className="container" style={{ marginTop: "90px" }}>
            <h1 className="display-1 text-primary">Error 404</h1>
            <h2 className="text-secondary">Page Not Found!</h2>
        </div>
    );
}

export default NotFound;