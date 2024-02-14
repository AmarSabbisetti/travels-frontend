import React, { useState } from 'react';
import { Container, Typography, Button, Grid, Card, CardContent } from '@mui/material';

const UserDashboard = ({ travelPlans }) => {
  const [registeredPlans, setRegisteredPlans] = useState([]);

  // Function to register for a travel plan
  const handleRegister = (id) => {
    const plan = travelPlans.find(plan => plan.id === id);
    if (plan) {
      setRegisteredPlans([...registeredPlans, plan]);
    }
  };

  // Function to deregister from a travel plan
  const handleDeregister = (id) => {
    setRegisteredPlans(registeredPlans.filter(plan => plan.id !== id));
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        User Dashboard
      </Typography>
      <Typography variant="h5" gutterBottom>
        Available Travel Plans
      </Typography>
      <Grid container spacing={2}>
        {travelPlans.map(plan => (
          <Grid item xs={12} sm={6} md={4} key={plan.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h2">
                  {plan.destination}
                </Typography>
                <Typography color="textSecondary">
                  Date: {plan.date}
                </Typography>
                <Button variant="contained" onClick={() => handleRegister(plan.id)}>
                  Register
                </Button>
                <Button variant="contained" onClick={() => handleDeregister(plan.id)}>
                  Deregister
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* Additional logic for displaying registered travel plans */}
    </Container>
  );
};



export default UserDashboard;