import React from 'react';
import { Card, CardContent, Typography, Avatar, Box, Chip } from '@mui/material';
import { formatNumber } from '../utils/helpers';

const UserCard = ({ user, rank }) => {
  return (
    <Card sx={{ 
      position: 'relative', 
      transition: 'transform 0.3s, box-shadow 0.3s',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: 6
      }
    }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ position: 'relative' }}>
            <Avatar 
              src={user.profileImage} 
              alt={user.name}
              sx={{ width: 64, height: 64 }}
            />
            {rank && (
              <Chip
                label={rank}
                color="primary"
                size="small"
                sx={{
                  position: 'absolute',
                  top: -8,
                  left: -8,
                  borderRadius: '50%',
                  width: 24,
                  height: 24,
                }}
              />
            )}
          </Box>
          
          <Box>
            <Typography variant="h6" component="h3" gutterBottom>
              {user.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {user.username}
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
              <Typography variant="body2">
                <strong>{formatNumber(user.posts)}</strong> posts
              </Typography>
              <Typography variant="body2">
                <strong>{formatNumber(user.followers)}</strong> followers
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UserCard;