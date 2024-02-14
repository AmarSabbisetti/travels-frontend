import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Card, CardContent } from '@mui/material';

const AdminDashboard = () => {
  const [travelPlans, setTravelPlans] = useState([]);
  const [newPlan, setNewPlan] = useState({ destination: '', fromDate: '', toDate: '', price: '', image: '' });
  const [nextId, setNextId] = useState(1);

  const calculateDuration = (fromDate, toDate) => {
    const start = new Date(fromDate);
    const end = new Date(toDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffNights = diffDays - 1; // Assuming one night less than days
    return { days: diffDays, nights: diffNights };
  };

  const handleAddPlan = () => {
    const updatedPlan = { ...newPlan, id: nextId };
    setTravelPlans([...travelPlans, updatedPlan]);
    setNewPlan({ destination: '', fromDate: '', toDate: '', price: '', image: '' });
    setNextId(nextId + 1);
  };

  const handleDeletePlan = (id) => {
    setTravelPlans(travelPlans.filter(plan => plan.id !== id));
  };

  const handleEditPlan = (id) => {
    setTravelPlans(travelPlans.map(plan =>
      plan.id === id ? { ...plan, isEditing: true } : plan
    ));
  };

  const handleSavePlan = (id) => {
    setTravelPlans(travelPlans.map(plan =>
      plan.id === id ? { ...plan, isEditing: false } : plan
    ));
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Destination"
            value={newPlan.destination}
            InputLabelProps={{ shrink: true }}
            onChange={(e) => setNewPlan({ ...newPlan, destination: e.target.value })}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="From Date"
            type="date"
            value={newPlan.fromDate}
            InputLabelProps={{ shrink: true }}
            onChange={(e) => setNewPlan({ ...newPlan, fromDate: e.target.value })}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="To Date"
            type="date"
            value={newPlan.toDate}
            InputLabelProps={{ shrink: true }}
            onChange={(e) => setNewPlan({ ...newPlan, toDate: e.target.value })}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Price"
            type="number"
            value={newPlan.price}
            onChange={(e) => setNewPlan({ ...newPlan, price: e.target.value })}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Image URL"
            value={newPlan.image}
            onChange={(e) => setNewPlan({ ...newPlan, image: e.target.value })}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleAddPlan}>
            Add Plan
          </Button>
        </Grid>
      </Grid>
      <Typography variant="h5" gutterBottom>
        Travel Plans
      </Typography>
      <Grid container spacing={2}>
        {travelPlans.map(plan => (
          <Grid item xs={12} sm={6} md={4} key={plan.id}>
            <Card>
              <CardContent>
                {plan.isEditing ? (
                  <>
                    <TextField
                      label="Destination"
                      value={plan.destination}
                      onChange={(e) => setTravelPlans(travelPlans.map(p => p.id === plan.id ? { ...p, destination: e.target.value } : p))}
                      fullWidth
                    />
                    <TextField
                      label="From Date"
                      type="date"
                      value={plan.fromDate}
                      InputLabelProps={{ shrink: true }}
                      onChange={(e) => setTravelPlans(travelPlans.map(p => p.id === plan.id ? { ...p, fromDate: e.target.value } : p))}
                      fullWidth
                    />
                    <TextField
                      label="To Date"
                      type="date"
                      value={plan.toDate}
                      InputLabelProps={{ shrink: true }}
                      onChange={(e) => setTravelPlans(travelPlans.map(p => p.id === plan.id ? { ...p, toDate: e.target.value } : p))}
                      fullWidth
                    />
                    <TextField
                      label="Price"
                      type="number"
                      value={plan.price}
                      onChange={(e) => setTravelPlans(travelPlans.map(p => p.id === plan.id ? { ...p, price: e.target.value } : p))}
                      fullWidth
                    />
                    <TextField
                      label="Image URL"
                      value={plan.image}
                      onChange={(e) => setTravelPlans(travelPlans.map(p => p.id === plan.id ? { ...p, image: e.target.value } : p))}
                      fullWidth
                    />
                  </>
                ) : (
                  <>
                    <Typography variant="h6" component="h2">
                      {plan.destination}
                    </Typography>
                    <Typography color="textSecondary">
                      From: {plan.fromDate}
                    </Typography>
                    <Typography color="textSecondary">
                      To: {plan.toDate}
                    </Typography>
                    <Typography color="textSecondary">
                      Price: Rs {plan.price}
                    </Typography>
                    <Typography color="textSecondary">
                      Duration: {calculateDuration(plan.fromDate, plan.toDate).days} days, {calculateDuration(plan.fromDate, plan.toDate).nights} nights
                    </Typography>
                    <img src={plan.image} alt={plan.destination} style={{ width: '100%', height: 'auto' }} />
                  </>
                )}
                <Button variant="outlined" onClick={() => plan.isEditing ? handleSavePlan(plan.id) : handleEditPlan(plan.id)}>
                  {plan.isEditing ? "Save" : "Edit"}
                </Button>
                <Button variant="outlined" onClick={() => handleDeletePlan(plan.id)}>
                  Delete
                </Button>
              </CardContent>
            </Card>

          </Grid>
        ))}
      </Grid>
    </Container>

  );
};

export default AdminDashboard;
