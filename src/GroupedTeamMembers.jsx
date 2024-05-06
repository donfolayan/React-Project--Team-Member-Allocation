import { useState } from "react";

const GroupedTeamMembers = ({employees, selectedTeam, setTeam}) => {

    const [groupedEmployees, setGroupedEmployees] = useState([groupTeamMembers()]);

    function groupTeamMembers() {
        const groupedEmployees = employees.reduce((acc, employee) => {
            if (acc[employee.teamName]) {
                acc[employee.teamName].push(employee);
            } else {
                acc[employee.teamName] = [employee];
            }
            return acc;
        }, {});

        return groupedEmployees;
    }

    return (
        <main className="container">
            <div className="row justify-content-center mt-3 mb-4">
                <div className="col-8">
                    <h1>Grouped Team Members</h1>
                </div>
            </div>
        </main>
    );
}

export default GroupedTeamMembers;