import React from 'react';
import { Typography, Alert, Button, Box } from '@mui/material';
import { api } from '../utils/api';
import useDataFetching from '../hooks/useDataFetching';
import PostCard from '../components/PostCard';
import LoadingSpinner from '../components/LoadingSpinner';

const TrendingPosts = () => {
  const { data: trendingPosts, loading, error } = useDataFetching(api.getTrendingPosts);

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
        Trending Posts (Highest Comment Count)
      </Typography>
      
      <Box sx={{ maxWidth: 600, mx: 'auto' }}>
        {trendingPosts.length > 0 ? (
          trendingPosts.map(post => (
            <PostCard key={post.id} post={post} isTrending={true} />
          ))
        ) : (
          <Typography variant="body1" color="text.secondary" align="center" sx={{ py: 4 }}>
            No trending posts found.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default TrendingPosts;