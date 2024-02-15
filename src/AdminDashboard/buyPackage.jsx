import axiosinstance from "../axiosConfig";
import { useState } from "react";
import { useLocation,useParams } from "react-router-dom";

const BuyPackage = () => {
  //console.log(localStorage.getItem("access_token"))
  //const [sid, setId] = useState("");
  const { id } = useParams();
  const [no_of_persons, setnum] = useState("");
  const [description, setDescription] = useState("");
  const [Img, setImg] = useState("");

  //const [isVisible, setIsVisible] = useState(false);

  const handlenumChange = (e) => {
    setnum(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postPackage();
    //setIsVisible(false);
    window.location.reload(true);
  };
  /**/
  const postPackage = () => {
    axiosinstance
      .post("/packages/add_plan/${id}", {
        no_of_persons:no_of_persons
      })
      .then((response) => {
        // Handle response
        console.log("Place added successfully:", response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error adding package:", error);
      });
  };
 

  return (
    <div>
      <div></div>

      {
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
        </div>
      }
    </div>
  );
};

export default BuyPackage;
