import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { formatDate } from "../utils";

type DisplayApplication = {
    applicationId: string;
    applicantName: string;
    submittedAt: string;
}

const Applications = () => {
    const [applications, _setApplications] = useState<Array<DisplayApplication>>([]);
    const [loading, _setLoading] = useState(true);
   // const navigate = useNavigate();


    useEffect(() => {
        async function getApplications() {
            console.log("Not implemented yet");
        }

        getApplications();

    }, []);

    if (loading) {
        return null;
    }

    return (
        <div>
            <h2>Active applications</h2>
            <table>
                <thead>
                    <tr>
                        <th>Applicant name</th>
                        <th>Application submitted on</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {/* if applications is empty list, show one row that says "No applications to show" */}
                    {applications.length === 0 ? (
                        <tr>
                            <td colSpan={7}>No applications to show</td>
                        </tr>
                    ) :
                    applications.map((application) => (
                        <tr key={application.applicationId}>
                            <td>{application.applicantName}</td>
                            <td>{formatDate(application.submittedAt || "")}</td>
                            <td><Link to={`/applications/${application.applicationId}`}>View details</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Applications;
