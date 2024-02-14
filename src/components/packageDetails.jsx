/*import { useState } from "react";
import EditDataPage from "./EditDataPage.jsx";
import DeleteData from "../bin/DeleteData.jsx";
import PackageDetails from "./packageDetails.jsx";

const PackageDetailsPage = () => {
	const packageDetails = PackageDetails();
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
		<div className={"PackagesTable"}>
			<table id={"Packages"}>
				<thead>
					<tr>
						<th className={"tablehead"}>id</th>
						<th className={"table-head"}>Name</th>
						<th className={"table-head"}>Start Date</th>
						<th className={"table-head"}>End Date</th>
						<th className={"table-head"}>Price</th>
                        <th className={"table-head"}>Slots</th>
					</tr>
				</thead>
				<tbody>
					{packageDetails.map((package, id) => (
						<tr key={id}>
							<td className={"table-data"}>{package.id}</td>
							<td className={"table-data"}>{package.name}</td>
							<td className={"table-data"}>{package.age}</td>
							<td className={"table-data"}>{package.address}</td>
							<td className={"table-data"}>{package.}
								<button
									className={"button editButton"}
									onClick={() => {
										ShowEditForm(package.id);
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

export default PackageDetailsPage;*/