import axiosinstance from "../axiosConfig";
import { useState } from "react";
import { useLocation ,useParams} from "react-router-dom";



const AddAmenityDataFormPage = () => {
	//console.log(localStorage.getItem("access_token"))
	//const [sid, setId] = useState("");
    const { id } = useParams();
	const [name, setName] = useState("");
    const [description,setDescription]=useState("");
	const [Img, setImg] = useState("");

	

	//const [isVisible, setIsVisible] = useState(false);

	const handleNameChange = (e) => {
		setName(e.target.value);
	};


	const handleDescrptionChange = (e) => {
		setDescription(e.target.value);
	};
   

	const handleSubmit = (e) => {
		e.preventDefault();
		postPackage();
		//setIsVisible(false);
		window.location.reload(true);
	};
/**/
	const postPackage = () => {
		axiosinstance.post("/packages/"+id+"/amenities/",
		{
			name: name,
			description: description,
			Img:Img
        }
		).then(response => {
		  // Handle response
		  console.log('Place added successfully:', response.data);
		}).catch(error => {
		  // Handle error
		  console.error('Error adding package:', error);
		});
	  };
	  
	

	return (
		<div>
			<div>
			</div>

			{ (
				<div className="addDataForm">
					<form
						onSubmit={(e) => {
							handleSubmit(e);
						}}
					>
						<h3>Add Amenity Details</h3>
						<label>Name</label>
						<br />
						<input
							type="text"
							value={name}
							required
							onChange={(e) => {
								handleNameChange(e);
							}}
						/>
						<br />
						<label>Description</label>
						<br />
						<input
							type="text"
							value={description}
							required
							onChange={(e) => {
								handleDescrptionChange(e);
							}}
						/>
						<br />
						
					
						<input
							type="submit"
							value="Submit"
							onClick={(e) => {
								handleSubmit(e);
							}}
						/>
					</form>
				</div>
			)}
		</div>
	);
};

export default AddAmenityDataFormPage;