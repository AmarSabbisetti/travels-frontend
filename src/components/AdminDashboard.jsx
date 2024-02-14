// AdminDashboard.js or UserDashboard.js
import React from 'react';
import Packages from './AdminDashboard';

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Packages />
    </div>
  );
};

export default AdminDashboard;

/*import { useState } from "react";
//import EditDataPage from "./EditDataPage.jsx";
//import DeleteData from "../bin/DeleteData.jsx";
//import StudentDetails from "../bin/StudentDetails.jsx";

const PackagesDetailsPage = () => {
	const studentDetails = StudentDetails();
	const [isVisible, setIsVisible] = useState(false);
	const [editId, setEditId] = useState("");

	const ShowEditForm = (id) => {
		setIsVisible((prev) => {
			setIsVisible(!prev);
		});
		console.log(id);
		setEditId(id);
	};

	return (
		<div className={"studentTable"}>
			<table id={"students"}>
				<thead> 
					<tr>
						<th className={"tablehead"}>ID</th>
						<th className={"table-head"}>Name</th>
						<th className={"table-head"}>Age</th>
						<th className={"table-head"}>Address</th>
						<th className={"table-head"}></th>
					</tr>
				</thead>
				<tbody>
					{studentDetails.map((student, id) => (
						<tr key={id}>
							<td className={"table-data"}>{student.id}</td>
							<td className={"table-data"}>{student.name}</td>
							<td className={"table-data"}>{student.age}</td>
							<td className={"table-data"}>{student.address}</td>
							<td className={"table-data"}>
								<button
									className={"button editButton"}
									onClick={() => {
										ShowEditForm(student.id);
									}}
								>
									Edit
								</button>

								<button
									className={"button deleteButton"}
									onClick={() => DeleteData(student.id)}
								>
									Delete
								</button>

								{isVisible && editId===student.id && (
									<EditDataPage
										students={student}
									/>
								)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default PackagesDetailsPage;*/