import React, { useState, useEffect } from "react";
import axiosinstance from "../axiosConfig";
import { useParams, Link } from "react-router-dom";
import { useUserContext } from "../context/userContext";
import AddPlaceDataFormPage from "./addPlace";
import AddAmenityDataFormPage from "./addAmenity.jsx";
const PackageDetailsPage = () => {
  const [packageData, setPackageData] = useState(null);
  const { id } = useParams();
  const { role } = useUserContext();
  const [showform, setshowform] = useState(false);
  const [showaddform, setshowaddform] = useState(false);
  console.log("Package ID:", id);
  console.log({ role });
  useEffect(() => {
    axiosinstance
      .get("/packages/detail/" + id)
      .then((response) => {
        setPackageData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching package details:", error);
      });
  }, [id]);

  const deleteData = () => {};

  if (!packageData) {
    return <div>Loading...</div>;
  }

  const AddPlace = () => {
    //navigate('/Addpackage');
    setshowform(!showform);
  };
  const AddAmenity = () => {
    //navigate('/Addpackage');
    setshowaddform(!showaddform);
  };
  const DeleteData = async (pid) => {
    await axiosinstance.delete("/packages/"+id+"/places/" + pid);
    window.location.reload(true);
  };
  const deleteAmenityData=async (pid)=>{
    await axiosinstance.delete("/packages/"+id+"/amenities/" + pid);
    window.location.reload(true);
  }

  return (
    <div>
      <h2>Package Details</h2>
      <p>Name: {packageData.name}</p>
      <p>Description: {packageData.description}</p>
      <p>Days: {packageData.days}</p>
      <p>Price: {packageData.price}</p>
      <p>Start Date: {packageData.start_date}</p>
      <p>End Date: {packageData.end_date}</p>
      <p>Slots: {packageData.slots}</p>
      <div>
        {/* {packageData.places.map((place) => (
          <div>
            <img src={place.Img}/>
          </div>
        ))} */}
        <h2>Places</h2><div className={"table-container"}>
        <table id={"Places"} className={"table"}>
          
          <thead>
            <tr>
              <th className={"table-head"}>ID</th>
              <th className={"table-head"}>Name</th>
              <th className={"table-head"}>Description</th>
              <th className={"table-head"}>Image</th>
              <th className={"table-head"}></th>
            </tr>
          </thead>
          <tbody>
            {packageData.places.map((packageItem, id) => (
              <tr key={id}>
                <td className={"table-data"}>{packageItem.id}</td>
                <td className={"table-data"}>{packageItem.name}</td>
                <td className={"table-data"}>{packageItem.description}</td>
                <td className={"table-data"}>
                  <a href={packageItem.Img} target="_blank">
                    IMG
                  </a>
                </td>
                {role === "admin" && (
                  <td className={"table-data"}>
                    <button
                      className={"button deleteButton"}
                      onClick={() => DeleteData(packageItem.id)}
                    >
                      Delete
                    </button>
                  </td>
                )}
                {/* <td>
                  <button
                    className={"button Detail Button"}
                    // onClick={() => details(packageItem.id)}
                  >
                    Details
                  </button>
                  <Link to={`/packages/${packageItem.id}`}>View Details</Link>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
      {role === "admin" && (
        <td className={"table-data"}>
          <button className={"button AddButton"} onClick={() => AddPlace()}>
            Add Place
          </button>
          <div>{showform && <AddPlaceDataFormPage />}</div>
        </td>
      )}

<div>
        {/* {packageData.places.map((place) => (
          <div>
            <img src={place.Img}/>
          </div>
        ))} */}

        <h2>Amenities</h2>
        <div class Name={"table-container"}>
        <table id={"packages"}  className={"table"}>
          <thead>
            <tr>
              <th className={"table-head"}>ID</th>
              <th className={"table-head"}>Name</th>
              <th className={"table-head"}>Description</th>
              <th className={"table-head"}></th>
            </tr>
          </thead>
          <tbody>
            {packageData.amenities.map((packageItem, id) => (
              <tr key={id}>
                <td className={"table-data"}>{packageItem.id}</td>
                <td className={"table-data"}>{packageItem.name}</td>
                <td className={"table-data"}>{packageItem.description}</td>
                
                {role === "admin" && (
                  <td className={"table-data"}>
                    <button
                      className={"button deleteButton"}
                      onClick={() => deleteAmenityData(packageItem.id)}
                    >
                      Delete
                    </button>
                  </td>
                )}
                {/* <td>
                  <button
                    className={"button Detail Button"}
                    // onClick={() => details(packageItem.id)}
                  >
                    Details
                  </button>
                  <Link to={`/packages/${packageItem.id}`}>View Details</Link>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      {role === "admin" && (
        <td className={"table-data"}>
          <button className={"button AddButton"} onClick={() => AddAmenity()}>
            Add Amenity
          </button>
          <div>{showaddform && <AddAmenityDataFormPage />}</div>
        </td>
      )}
      
    </div>
  );
};

export default PackageDetailsPage;
