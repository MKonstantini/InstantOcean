import { FunctionComponent, useContext, useEffect } from "react";
import { CruiseContext, UserContext } from "../../../App";
import { useNavigate } from "react-router-dom";
import PageTopImg from "../../page_parts/PageTopImg";
import Cruise from "../../../interfaces/Cruise";

interface AdminToolsProps {

}

const AdminTools: FunctionComponent<AdminToolsProps> = () => {
    const [cruisesData, setCruisesData] = useContext(CruiseContext)
    const [userInfo, setUserInfo] = useContext(UserContext)
    const navigate = useNavigate()

    // admin check
    useEffect(() => {
        if (!userInfo || userInfo.accountType !== "admin") navigate("/")
    }, [])

    // date formatter to DD/MM/YYYY
    const dateFormatter = (dateStr: string) => {
        const date = new Date(dateStr)
        return (
            `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
        )
    }

    return (
        <div style={{ marginTop: "90px" }}>
            {/* Page Top */}
            <PageTopImg title="Admin Tools" subTitle="Change the DB, but be careful" imgSrc="PageImg-AdminTools.jpg" />

            {/* Header Banner */}
            <div className="headerCard bgGradient1 d-flex gap-5 justify-content-center my-4">
                <h1 className="sectionHeader">CRUD Commands Interface</h1>
            </div>

            {/* CRUD Interface Chart */}
            {
                cruisesData &&
                <div className="row mt-3 mb-4 m-5 text-center">
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Depart From</th>
                                <th>Ports</th>
                                <th>Duration</th>
                                <th>Nearest Date</th>
                                <th>Start Price</th>
                                <th>OPEN EDITOR</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cruisesData.map((cruise: Cruise, i: number) =>
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{cruise.name}</td>
                                        <td>{cruise.departFrom}</td>
                                        <td >{cruise.ports}</td>
                                        <td>{cruise.duration} Days</td>
                                        <td>{dateFormatter(cruise.startDate)}</td>
                                        <td>$ {cruise.startPrice}</td>
                                        <td>
                                            <button className="btn" onClick={() => navigate(`/admintools/${i}`)} style={{ color: "grey" }}>
                                                <i className="fa-solid fa-pen-to-square"></i>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            }

            {/* Add Cruise */}
            <div className="d-flex justify-content-center my-4">
                <button className="btn btn-outline-secondary px-5" onClick={() => navigate("/admintools/add")}>
                    Add Cruise
                </button>
            </div>
        </div>
    );
}

export default AdminTools;