import { FunctionComponent, useContext } from "react";
import { AdminContext } from "../../App";
import { useNavigate } from "react-router-dom";

interface AdminToolsProps {

}

const AdminTools: FunctionComponent<AdminToolsProps> = () => {
    const [isAdmin, setIsAdmin] = useContext(AdminContext)
    const navigate = useNavigate()

    if (isAdmin === false) navigate("/")


    return (
        <section className="container my-5">
            <header>
                <h1 className='text-primary display-1'>Admin Tools</h1>
            </header>
        </section>
    );
}

export default AdminTools;