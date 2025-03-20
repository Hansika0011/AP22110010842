import React from 'react';
import { 
  Card, 
  CardHeader, 
  CardMedia, 
  CardContent, 
  Typography, 
  Avatar, 
  Box,
  Chip
} from '@mui/material';
import { formatTimestamp, formatNumber } from '../utils/helpers';

const PostCard = ({ post, isTrending }) => {
  return (
    <Card sx={{ 
      mb: 3,
      transition: 'transform 0.3s, box-shadow 0.3s',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: 6
      }
    }}>
      <CardHeader
        avatar={
          <Avatar src={post.user.profileImage} alt={post.user.name} />
        }
        title={post.user.name}
        subheader={post.user.username}
        action={
          isTrending && (
            <Chip 
              label="Trending 🔥" 
              color="error" 
              size="small" 
              sx={{ mt: 1 }}
            />
          )
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={post.image}
        alt="Post content"
      />
      <CardContent>
        <Typography variant="body1" gutterBottom>
          {post.content}
        </Typography>
        
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          mt: 2 
        }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Typography variant="body2" color="text.secondary">
              <strong>{formatNumber(post.likes)}</strong> likes
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>{formatNumber(post.comments)}</strong> comments
            </Typography>
          </Box>
          
          <Typography variant="body2" color="text.secondary">
            {formatTimestamp(post.timestamp)}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PostCard;