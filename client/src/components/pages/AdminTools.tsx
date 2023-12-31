import { FunctionComponent, useContext } from "react";
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";

interface AdminToolsProps {

}

const AdminTools: FunctionComponent<AdminToolsProps> = () => {
    const [userInfo, setUserInfo] = useContext(UserContext)
    const navigate = useNavigate()

    if (userInfo.accountType !== "admin") navigate("/")


    return (
        <section className="container my-5">
            <header>
                <h1 className='text-primary display-1'>Admin Tools</h1>
            </header>
        </section>
    );
}

export default AdminTools;