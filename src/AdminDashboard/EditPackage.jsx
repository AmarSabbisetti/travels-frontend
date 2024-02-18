import axiosinstance from "../axiosConfig";
import { useState, useEffect } from "react";

const EditDataFormPage = ({ id }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [StartDate, setStartDate] = useState("");
    const [EndDate, setEndDate] = useState("");
    const [days, setDays] = useState("");
    const [price, setPrice] = useState("");
    const [slots, setSlots] = useState("");

    useEffect(() => {
        // Fetch the data of the item to edit using its ID
        axiosinstance.get("/packages/detail/" + id)
            .then(response => {
                const packageData = response.data;
                setName(packageData.name);
                setDescription(packageData.description);
                setStartDate(packageData.start_date);
                setEndDate(packageData.end_date);
                setDays(packageData.days);
                setPrice(packageData.price);
                setSlots(packageData.slots);
            })
            .catch(error => {
                console.error('Error fetching package data:', error);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        updatePackage();
    };

    const updatePackage = () => {
        axiosinstance.put(`/packages/${id}/`, {
            name: name,
            description: description,
            slots: slots,
            price: price,
            start_date: StartDate,
            end_date: EndDate,
            days: days
        }).then(response => {
            console.log('Package updated successfully:', response.data);
        }).catch(error => {
            console.error('Error updating package:', error);
        });
        window.location.reload(true);
    };

    return (
        <div className="editDataForm">
            <form onSubmit={handleSubmit}>
                <h3>Edit Package Details</h3>
                <label>Name</label><br />
                <input type="text" value={name} required onChange={e => setName(e.target.value)} /><br />
                <label>Description</label><br />
                <input type="text" value={description} required onChange={e => setDescription(e.target.value)} /><br />
                <label>Price</label><br />
                <input type="number" value={price} required onChange={e => setPrice(e.target.value)} /><br />
                <label>Slots</label><br />
                <input type="number" value={slots} required onChange={e => setSlots(e.target.value)} /><br />
                <label>StartDate</label><br />
                <input type="date" value={StartDate} required onChange={e => setStartDate(e.target.value)} /><br />
                <label>EndDate</label><br />
                <input type="date" value={EndDate} required onChange={e => setEndDate(e.target.value)} /><br />
                <label>Days</label><br />
                {/* <input type="number" value={days} required onChange={e => setDays(e.target.value)} /><br /> */}
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default EditDataFormPage;
