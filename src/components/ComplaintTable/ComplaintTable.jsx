import { useEffect, useState } from "react";
import API from "../../services/api";
import "./ComplaintTable.css";

function ComplaintTable() {

    const [complaints, setComplaints] = useState([]);

    useEffect(() => {
        fetchComplaints();
    }, []);

    const fetchComplaints = async () => {
        try {
            const response = await API.get("/complaints");
            setComplaints(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="table-container">

            <h3>Recent Complaints</h3>

            <table>

                <thead>

                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Issue</th>
                    <th>Status</th>
                    <th>Priority</th>
                </tr>

                </thead>

                <tbody>

                {complaints.map((complaint) => (

                    <tr key={complaint.id}>

                        <td>{complaint.id}</td>
                        <td>{complaint.customerName}</td>
                        <td>{complaint.email}</td>
                        <td>{complaint.issue}</td>
                        <td>{complaint.status}</td>
                        <td>{complaint.priority}</td>

                    </tr>

                ))}

                </tbody>

            </table>

        </div>
    );
}

export default ComplaintTable;