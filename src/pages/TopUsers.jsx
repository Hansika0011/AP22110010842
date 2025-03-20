import React from 'react';
import { Typography, Grid, Alert, Button, Box } from '@mui/material';
import { api } from '../utils/api';
import useDataFetching from '../hooks/useDataFetching';
import UserCard from '../components/UserCard';
import LoadingSpinner from '../components/LoadingSpinner';

const TopUsers = () => {
  const { data: topUsers, loading, error } = useDataFetching(api.getTopUsers);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <Box sx={{ textAlign: 'center', py: 5 }}>
        <Alert severity="error" sx={{ mb: 2, maxWidth: 500, mx: 'auto' }}>
          {error}
        </Alert>
        <Button 
          variant="contained" 
          color="primary"
          onClick={() => window.location.reload()}
        >
          Try Again
        </Button>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
        Top Users by Post Count
      </Typography>
      
      <Grid container spacing={3}>
        {topUsers.map((user, index) => (
          <Grid item xs={12} md={6} lg={4} key={user.id}>
            <UserCard user={user} rank={index + 1} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TopUsers;