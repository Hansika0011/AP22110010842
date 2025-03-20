import React, { useEffect } from 'react';
import { Typography, Alert, Button, Box, Chip } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { api } from '../utils/api';
import useDataFetching from '../hooks/useDataFetching';
import PostCard from '../components/PostCard';
import LoadingSpinner from '../components/LoadingSpinner';

const Feed = () => {
  const { data: posts, loading, error, setData } = useDataFetching(api.getFeed);

  // Subscribe to real-time updates
  useEffect(() => {
    const unsubscribe = api.subscribeToFeed((newPost) => {
      setData(prevPosts => [newPost, ...prevPosts]);
    });
    
    // Cleanup subscription on component unmount
    return () => {
      unsubscribe();
    };
  }, [setData]);

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
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        mb: 4
      }}>
        <Typography variant="h4" component="h1">
          Recent Posts
        </Typography>
        
        <Chip
          icon={<FiberManualRecordIcon sx={{ fontSize: 10, color: 'success.main' }} />}
          label="Real-time updates active"
          variant="outlined"
          color="success"
          size="small"
        />
      </Box>
      
      <Box sx={{ maxWidth: 600, mx: 'auto' }}>
        {posts.length > 0 ? (
          posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))
        ) : (
          <Typography variant="body1" color="text.secondary" align="center" sx={{ py: 4 }}>
            No posts found.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Feed;