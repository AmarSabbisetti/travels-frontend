// Packages.js
import React, { useCallback, useEffect, useState } from "react";
import axiosinstance from "../axiosConfig";
import "./table.css";
// import DetailViewData from "./packageDetail";
import EditDataFormPage from "./EditPackage";
import {  Link } from "react-router-dom";
import AddDataFormPage from "./addPackage";
import { useUserContext } from "../context/userContext";
// import BuyPackages from "./buyPackage";
import { Button } from "@mui/material";

const Packages = () => {
  // const navigate = useNavigate();
  const { role } = useUserContext();
  const [packages, setPackages] = useState([]);
  const [mypackages, setmyPackages] = useState([]);
  // const [isVisible, setIsVisible] = useState(false);
  // const [editId, setEditId] = useState("");
  //const [showform, setShowForm] = useState(false); // State to manage showing add form
  const [showEditForm, setShowEditForm] = useState(false); // State to manage showing edit form
  const [editPackageId, setEditPackageId] = useState("");
  //const navigate=useNavigate();
  useEffect(() => {
    const fetchPackages = async (e) => {
      try {
        const response = await axiosinstance.get("/packages/");
        setPackages(response.data);
      } catch (error) {
        console.error("Error fetching packages:", error.message);
      }
    };

    fetchPackages();
  }, []);

  const fetchmyPackages = useCallback(async (e) => {
    try {
      const response = await axiosinstance.get("/myjourneys/");
      setmyPackages(response.data);
    } catch (error) {
      console.error("Error fetching packages:", error.message);
    }
  }, []);

  useEffect(() => {
    fetchmyPackages();
  }, [fetchmyPackages]);

  const ShowEditForm = (id) => {
    setShowEditForm(true);
    setEditPackageId(id);
  };

  const handleCloseEditForm = () => {
    setShowEditForm(false);
    setEditPackageId("");
  };
  const DeleteData = async (id) => {
    await axiosinstance.delete("/packages/" + id);
    window.location.reload(true);
  };
  const tripDeleteData = async (id) => {
    await axiosinstance.delete("/packages/remove_plan/" + id);
    window.location.reload(true);
  };

  // const details = ({ id }) => {
    // navigate("/packages/${id}");
    //<Link to={`/packages/${id}`}>View Details</Link>
  // };

  const [showform, setshowform] = useState(false);
  const AddPackage = () => {
    //navigate('/Addpackage');
    setshowform(!showform);
  };
  const [showcartform, setshowcart] = useState(false);
  // const [no_of_persons, setnum] = useState("");

  // const handlenumChange = (e) => {
  //   setnum(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     AddUserPackage();
  //     window.location.reload(true);
  //   };
  const AddCart = async ({ id, count }) => {
    //navigate('/Addpackage');
    setshowcart(!showcartform);
    try {
      await axiosinstance.post("/packages/add_plan/" + id, {
        no_of_persons: count,
      });
      await fetchmyPackages();
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <div>
      <p>
        <Link to="/logout">
          <Button variant="contained">Logout</Button>
        </Link>
      </p>
      <h1>Trip Packages</h1>
      <div className={"table-container"}>
        <table id={"packages"} className={"table"}>
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
              <th className={"table-head"}></th>
            </tr>
          </thead>
          <tbody>
            {packages.map((packageItem, id) => (
              <tr key={id}>
                {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
                <td className={"table-data"}>{id+1}</td>
                <td className={"table-data"}>{packageItem.name}</td>
                <td className={"table-data"}>{packageItem.description}</td>
                <td className={"table-data"}>{packageItem.price}</td>
                <td className={"table-data"}>{packageItem.start_date}</td>
                <td className={"table-data"}>{packageItem.end_date}</td>
                <td className={"table-data"}>{packageItem.days}</td>
                <td className={"table-data"}>{packageItem.slots}</td>
                
                <td className={"table-data"}>
                  {role === "admin" && (
                    <div>
                      <button
                        className={"button editButton"}
                        onClick={() => ShowEditForm(packageItem.id)}
                      >
                        Edit
                      </button>
                      <button
                        className={"button deleteButton"}
                        onClick={() => DeleteData(packageItem.id)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                  {role === "user" && (
                    <button
                      className={"button buy"}
                      onClick={() => {
                        const count = prompt("How many persons?", "1");
                        AddCart({id: packageItem.id, count: parseInt(count)});
                      }}
                      //onClick={() => AddCart(packageItem.id)}
                    >
                      buy
                    </button>
                  )}
                  {/* <div>{showcartform && setshowcart(false)}</div> */}
                </td>
                <td>
                  {/* <button
                  className={"button Detail Button"}
                  onClick={() => details(packageItem.id)}
                >
                  Details
                </button> */}
                  <Link to={`/packages/${packageItem.id}`}>View Details</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {role === "admin" && (
          <button
            className={"button ADDpackageButton"}
            onClick={() => AddPackage()}
          >
            ADD NEW Package
          </button>
        )}
        {/* Edit Package Form */}
        {showEditForm && (
          <EditDataFormPage
            id={editPackageId}
            onClose={() => handleCloseEditForm()}
          />
        )}
        <div>{showform && <AddDataFormPage />}</div>
        {/*<div>{showcartform ?(
        <div className="addDataForm">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <label>No.of Persons</label>
            <br />
            <input
              type="number"
              value={no_of_persons}
              required
              onChange={(e) => {
                handlenumChange(e);
              }}
            />

            <br />
            <input
              type="submit"
              value="submit"
              onClick={(e) => {
                handleSubmit(e);
              }}
            />
          </form>
        </div>):(<div />)}</div> */}
      </div>

      {role === "user" ? (
        <div>
          <h1>My Upcoming Trips Plans</h1>
          <div className={"table-container"}>
            <table id={"packages"} className={"table"}>
              <thead>
                <tr>
                  <th className={"table-head"}>ID</th>
                  <th className={"table-head"}>Name</th>
                  <th className={"table-head"}>Start Date</th>
                  <th className={"table-head"}>Date</th>
                  <th className={"table-head"}>no of persons</th>
                  <th className={"table-head"}>Total cost</th>
                  <th className={"table-head"}></th>
                  <th className={"table-head"}></th>
                </tr>
              </thead>
              <tbody>
                {mypackages.map((packageItem, id) => (
                  <tr key={id}>
                    <td className={"table-data"}>{packageItem.deal_id}</td>
                    <td className={"table-data"}>{packageItem.name}</td>
                    <td className={"table-data"}>{packageItem.start_date}</td>
                    <td className={"table-data"}>{packageItem.date}</td>
                    <td className={"table-data"}>
                      {packageItem.no_of_persons}
                    </td>
                    <td className={"table-data"}>{packageItem.total_cost}</td>

                    <td className={"table-data"}>
                      {role === "user" && (
                        <button
                          className={"button deleteButton"}
                          onClick={() => tripDeleteData(packageItem.deal_id)}
                        >
                          Delete
                        </button>
                      )}

                      {/* <div>{showcartform && setshowcart(false)}</div> */}
                    </td>
                    <td>
                      {/* <button
                  className={"button Detail Button"}
                  onClick={() => details(packageItem.id)}
                >
                  Details
                </button> */}
                      <Link to={`/packages/${packageItem.id}`}>
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Packages;
