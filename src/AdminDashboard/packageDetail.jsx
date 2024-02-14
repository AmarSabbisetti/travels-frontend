import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axiosinstance from "../axiosConfig";

const PackageDetailsPage = () => {
    const { id } = useParams(); // Get the package ID from the URL params
    const [packageDetails, setPackageDetails] = useState(null);

    useEffect(() => {
        // Fetch package details with the specific ID
        axiosinstance.get(`/packages/${id}`)
            .then((res) => {
                setPackageDetails(res.data);
            })
            .catch((error) => {
                console.error('Error fetching package details:', error);
            });
    }, [id]); // Trigger the effect when the package ID changes

    if (!packageDetails) {
        return <div>Loading...</div>; // Render a loading message while fetching data
    }

    const { packageName, Description, packageDuration, packageCost, packageSlots } = packageDetails;

    return (
        <div>
            <h2>Package Details</h2>
            <p>Name: {packageName}</p>
            <p>Description: {Description}</p>
            <p>Duration: {packageDuration} months</p>
            <p>Cost: ${packageCost}</p>
            <p>Slots: {packageSlots}</p>
        </div>
    );
};

export default PackageDetailsPage;
