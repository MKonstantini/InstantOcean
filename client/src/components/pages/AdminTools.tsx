import { FunctionComponent, useContext, useEffect, useState } from "react";
import { CruiseContext, UserContext } from "../../App";
import { useNavigate } from "react-router-dom";
import PageTopImg from "../page_parts/PageTopImg";
import Cruise from "../../interfaces/Cruise";
import CruiseCard from "../page_parts/CruiseCard";
import FormCRUDEditor from "../page_parts/FormCRUDEditor";

interface AdminToolsProps {

}

const AdminTools: FunctionComponent<AdminToolsProps> = () => {
    const [cruisesData, setCruisesData] = useContext(CruiseContext)
    const [userInfo, setUserInfo] = useContext(UserContext)
    const navigate = useNavigate()

    // state for editor FC
    const [selectedCruise, setSelectedCruise] = useState<number>(0)

    // admin check
    useEffect(() => {
        if (!userInfo || userInfo.accountType !== "admin") navigate("/")
    }, [])

    useEffect(() => {
        console.log(selectedCruise)
    })


    // date formatter to DD/MM/YYYY
    const dateFormatter = (dateStr: string) => {
        const date = new Date(dateStr)
        return (
            `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
        )
    }

    // CRUD chart FC
    const displayCRUDChart = () => {
        return (
            cruisesData &&
            <div className="row mt-3 m-5 text-center">
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
                                        <button className="btn" onClick={() => navigate(`/admintools/${i}`)} style={{ color: "darkblue" }}>
                                            <i className="fa-solid fa-pen-to-square"></i>
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
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
                displayCRUDChart()
            }

            {/* Editor */}
            {
                selectedCruise &&
                <div className="d-flex flex-column align-items-center">
                    <h6 className="fw-bold">CHOSEN CRUISE EDITOR</h6>
                    <FormCRUDEditor initialCruise={cruisesData[selectedCruise]} />
                </div>
            }
            <h5>{selectedCruise}</h5>

        </div>
    );
}

export default AdminTools;