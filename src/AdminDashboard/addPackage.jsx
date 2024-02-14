import axiosinstance from "../axiosConfig";
import { useState } from "react";
import { useLocation } from "react-router-dom";



const AddDataFormPage = () => {
	console.log(localStorage.getItem("access_token"))
	//const [sid, setId] = useState("");
	const [name, setName] = useState("");
    const [description,setDescription]=useState("");
	const [StartDate, setStartDate] = useState("");
	const [EndDate, setEndDate] = useState("");
    const [days, setDays] = useState("");
    const [price, setPrice]=useState("");
    const [slots, setSlots]=useState("");

	const [isVisible, setIsVisible] = useState(false);

	const handleDaysChange = (e) => {
		setDays(e.target.value);
	};

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

	const handleDescrptionChange = (e) => {
		setDescription(e.target.value);
	};
    const handlePriceChange = (e) => {
		setPrice(e.target.value);
	};

	const handleSlotsChange = (e) => {
		setSlots(e.target.value);
	};

	const handleStartDateChange = (e) => {
		setStartDate(e.target.value);
	};

	const handleEndDateChange = (e) => {
		setEndDate(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		postPackage();
		setIsVisible(false);
		window.location.reload(true);
	};
/**/
	const postPackage = () => {
		axiosinstance.get("/packages/",
		{
			name: name,
			description: description,
			slots: slots,
			price: price,
			start_date: StartDate,
			end_date: EndDate,
			days: days
		  },
		  {
			headers: {
			  Authorization: localStorage.getItem('access_token')
			}}
		).then(response => {
		  // Handle response
		  console.log('Package added successfully:', response.data);
		}).catch(error => {
		  // Handle error
		  console.error('Error adding package:', error);
		});
	  };
	  
	

	return (
		<div>
			<div>
				<button
					className="addButton"
					onClick={() => {
						setIsVisible((prev) => !prev);
					}}
				>
					<img
						width="24"
						height="24"
						src="https://img.icons8.com/color/24/add--v1.png"
						alt="add--v1"
					/>
				</button>
			</div>

			{isVisible && (
				<div className="addDataForm">
					<form
						onSubmit={(e) => {
							handleSubmit(e);
						}}
					>
						<h3>Add Student Details</h3>
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
						<label>Price</label>
						<br />
						<input
							type="text"
							value={price}
							required
							onChange={(e) => {
								handlePriceChange(e);
							}}
						/>
						<br />
						<label>Slots</label>
						<br />
						<input
							type="text"
							value={slots}
							required
							onChange={(e) => {
								handleSlotsChange(e);
							}}
						/>
                        <br />
						<label>StartDate</label>
						<br />
						<input
							type="text"
							value={StartDate}
							required
							onChange={(e) => {
								handleStartDateChange(e);
							}}
						/>
						<br />
						<label>EndDate</label>
						<br />
						<input
							type="text"
							value={EndDate}
							required
							onChange={(e) => {
								handleEndDateChange(e);
							}}
						/>
						<br />
						<label>Days</label>
						<br />
						<input
							type="text"
							value={days}
							required
							onChange={(e) => {
								handleDaysChange(e);
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

export default AddDataFormPage;