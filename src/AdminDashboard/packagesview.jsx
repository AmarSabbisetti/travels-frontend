import React from 'react';
// Assuming PackageCard component is in the same directory

function Dashboard({ packages }) {
  return (
    <div className="dashboard">
      <h1>Package Dashboard</h1>
      <div className="package-list">
        {packages.map((packageData) => (
          <PackageCard key={packageData.packageId} packageData={packageData} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
