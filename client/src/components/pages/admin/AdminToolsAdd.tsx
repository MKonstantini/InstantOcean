import { FunctionComponent, useContext, useEffect } from "react";
import { CruiseContext, UserContext } from "../../../App";
import { useNavigate } from "react-router-dom";
import FormCRUDAdd from "./FormCruiseAdd";

interface AdminToolsAddProps {

}

const AdminToolsAdd: FunctionComponent<AdminToolsAddProps> = () => {
    const [cruisesData, setCruisesData] = useContext(CruiseContext)
    const [userInfo, setUserInfo] = useContext(UserContext)

    const navigate = useNavigate()

    // admin check
    useEffect(() => {
        if (!userInfo || userInfo.accountType !== "admin") navigate("/")
    }, [])

    return (
        <div style={{ marginTop: "90px" }}>
            {/* Header Banner */}
            <div className="headerCard bgGradient1 d-flex gap-5 justify-content-center my-4">
                <h1 className="sectionHeader">Add New Cruise</h1>
            </div>

            {/* Add */}
            {
                cruisesData &&
                <div className="d-flex flex-column align-items-center">
                    <h6 className="fw-bold">Add Cruise:</h6>
                    <FormCRUDAdd />
                </div>
            }

        </div>
    );
}

export default AdminToolsAdd;