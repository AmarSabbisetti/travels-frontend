// Packages.js
import React, { useEffect, useState } from 'react';
import axiosinstance from '../axiosConfig';
import './table.css'
import DetailViewData from './packageDetail';
import AddPackage from './addPackage';
import { useNavigate } from 'react-router-dom';

const Packages = () => {
  const navigate=useNavigate();
  const [packages, setPackages] = useState([]);
	const [isVisible, setIsVisible] = useState(false);
	const [editId, setEditId] = useState("");


  useEffect(() => {
    const fetchPackages = async (e) => {

      try {
        const response = await axiosinstance.get('/packages/');
        setPackages(response.data);
      } catch (error) {
        console.error('Error fetching packages:', error.message);
      }
    };

    fetchPackages();
  }, []);

  const ShowEditForm = (id) => {
    setIsVisible((prev) => {
    setIsVisible(!prev);
  });
  console.log(id);
  setEditId(id);
};
const DeleteData = async(id) => {
      
  await axiosinstance.delete("/packages/" + id);
  window.location.reload(true);
};

  const details = async(id) =>{
    navigate('/packages/${id}');

  }

  const AddPackage = async(id) =>{
    navigate('/Addpackage');

  }



  return (
<div className={"PackageTable"}>
			<table id={"packages"}>
				<thead>
					<tr>
						<th className={"table-head"}>ID</th>
						<th className={"table-head"}>Name</th>
						<th className={"table-head"}>Description</th>
						<th className={"table-head"}>Price</th>
            <th className={"table-head"}>Start Date</th>
						<th className={"table-head"}>End Date</th>
						<th className={"table-head"}>Duration (in days)</th>
            <th className={"table-head"}>Available Slots</th>
						<th className={"table-head"}></th>
					</tr>
				</thead>
				<tbody>
					{packages.map((packageItem, id) => (
						<tr key={id}>
							<td className={"table-data"}>{packageItem.id}</td>
							<td className={"table-data"}>{packageItem.name}</td>
							<td className={"table-data"}>{packageItem.description}</td>
							<td className={"table-data"}>{packageItem.price}</td>
              <td className={"table-data"}>{packageItem.start_date}</td>
							<td className={"table-data"}>{packageItem.end_date}</td>
							<td className={"table-data"}>{packageItem.slots}</td>
							<td className={"table-data"}>{packageItem.days}</td>
							<td className={"table-data"}>
								
								

								<button
									className={"button deleteButton"}
									onClick={() => DeleteData(packageItem.id)}
								>
									Delete
								</button>
                </td>
              <td >
                <button
									className={"button Detail Button"}
									onClick={() => details(packageItem.id)}
								>
									Details
								</button>

                

							</td>
						</tr>
					))}
				</tbody>
			</table>
      <button className={"button ADDpackageButton"}
              onClick={()=> AddPackage()}
      >
               ADD NEW Package   
      </button>
		</div>
                   

  );};

export default Packages;