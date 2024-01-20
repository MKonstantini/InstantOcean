import { FunctionComponent, useContext, useEffect } from "react";
import { CruiseContext, UserContext } from "../../../App";
import { useNavigate, useParams } from "react-router-dom";
import FormCRUDEditor from "./FormCruiseEditor";

interface AdminToolsEditProps {

}

const AdminToolsEdit: FunctionComponent<AdminToolsEditProps> = () => {
    const [cruisesData, setCruisesData] = useContext(CruiseContext)
    const [userInfo, setUserInfo] = useContext(UserContext)

    const navigate = useNavigate()
    const { cruiseNum } = useParams()

    // admin check
    useEffect(() => {
        if (!userInfo || userInfo.accountType !== "admin") navigate("/")
    }, [])

    return (
        <div style={{ marginTop: "90px" }}>
            {/* Header Banner */}
            <div className="headerCard bgGradient1 d-flex gap-5 justify-content-center my-4">
                <h1 className="sectionHeader">Chosen Cruise Editor</h1>
            </div>

            {/* Editor */}
            {
                cruiseNum &&
                <div className="d-flex flex-column align-items-center">
                    <h6 className="fw-bold">Edit Cruise : {cruisesData[cruiseNum].name}</h6>
                    <FormCRUDEditor initialCruise={cruisesData[cruiseNum]} />
                </div>
            }

        </div>
    );
}

export default AdminToolsEdit;