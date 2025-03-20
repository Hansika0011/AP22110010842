// Mock data for demonstration purposes
// In a real application, this would be replaced with actual API calls

const users = [
    { id: 1, name: 'John Doe', username: '@johndoe', posts: 120, followers: 1500, profileImage: getRandomImage() },
    { id: 2, name: 'Jane Smith', username: '@janesmith', posts: 85, followers: 2200, profileImage: getRandomImage() },
    { id: 3, name: 'Robert Johnson', username: '@robert', posts: 210, followers: 980, profileImage: getRandomImage() },
    { id: 4, name: 'Emily Davis', username: '@emilyd', posts: 65, followers: 1700, profileImage: getRandomImage() },
    { id: 5, name: 'Michael Brown', username: '@michaelb', posts: 95, followers: 850, profileImage: getRandomImage() },
    { id: 6, name: 'Sarah Wilson', username: '@sarahw', posts: 50, followers: 1200, profileImage: getRandomImage() },
    { id: 7, name: 'David Lee', username: '@davidl', posts: 75, followers: 1900, profileImage: getRandomImage() }
  ];
  
  let posts = [
    { 
      id: 1, 
      userId: 1, 
      user: users.find(u => u.id === 1),
      content: 'Just launched our new product! Check it out #newproduct #launch', 
      likes: 45, 
      comments: 12, 
      timestamp: new Date(2023, 3, 10, 14, 30), 
      image: 'https://i.pinimg.com/originals/29/f5/c3/29f5c3ad94b7e678e580568642c52869.jpg' 
    },
    { 
      id: 2, 
      userId: 2, 
      user: users.find(u => u.id === 2),
      content: 'Beautiful sunset at the beach today! #sunset #beach #nature', 
      likes: 72, 
      comments: 18, 
      timestamp: new Date(2023, 3, 10, 18, 45), 
      image: 'https://th.bing.com/th/id/OIP.mUs6QOBbvqreLQGnTJuwWAHaHa?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7' 
    },
    { 
      id: 3, 
      userId: 3, 
      user: users.find(u => u.id === 3),
      content: 'Just finished reading this amazing book. Highly recommend! #books #reading', 
      likes: 32, 
      comments: 8, 
      timestamp: new Date(2023, 3, 10, 20, 15), 
      image: 'https://th.bing.com/th/id/OIP.OoAl690Iup8yqMEjOSHdWgHaJv?w=186&h=245&c=7&r=0&o=5&dpr=1.3&pid=1.7' 
    },
    { 
      id: 4, 
      userId: 4, 
      user: users.find(u => u.id === 4),
      content: 'Attended a great workshop today on digital marketing #marketing #workshop', 
      likes: 28, 
      comments: 5, 
      timestamp: new Date(2023, 3, 11, 9, 20), 
      image: 'https://th.bing.com/th/id/OIP.7y_8AqyFrDiMR1w23VURKwHaD0?w=332&h=179&c=7&r=0&o=5&dpr=1.3&pid=1.7' 
    },
    { 
      id: 5, 
      userId: 1, 
      user: users.find(u => u.id === 1),
      content: 'Working on a new project. Stay tuned for updates! #project #coding', 
      likes: 51, 
      comments: 14, 
      timestamp: new Date(2023, 3, 11, 11, 45), 
      image: 'https://th.bing.com/th/id/OIP.a4JTRRZMTCM5O44JRM0SSAEkDV?w=252&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    { 
      id: 6, 
      userId: 5, 
      user: users.find(u => u.id === 5),
      content: 'Just got back from an amazing trip to Japan! #travel #japan', 
      likes: 89, 
      comments: 24, 
      timestamp: new Date(2023, 3, 11, 15, 10), 
      image:'https://th.bing.com/th/id/OIP.E2OI4hjtWYkGQQwIb6LJOgHaEq?w=216&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'  
    },
    { 
      id: 7, 
      userId: 2, 
      user: users.find(u => u.id === 2),
      content: 'Trying out a new recipe today for dinner #cooking #foodie', 
      likes: 36, 
      comments: 9, 
      timestamp: new Date(2023, 3, 11, 17, 30), 
      image: 'https://th.bing.com/th/id/OIP.dMzBs8OW-kL_egS4R3G2zAHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    }
  ];
  
  // Helper function to generate random images
  function getRandomImage() {
    const width = 300;
    const height = 200;
    return `/api/placeholder/${width}/${height}`;
  }
  
  // Function to add a new post (for demonstration of real-time updates)
  function addNewPost() {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    const newPost = {
      id: posts.length + 1,
      userId: randomUser.id,
      user: randomUser,
      content: `New post at ${new Date().toLocaleTimeString()} #realtime #update`,
      likes: Math.floor(Math.random() * 50),
      comments: Math.floor(Math.random() * 15),
      timestamp: new Date(),
      image: getRandomImage()
    };
    
    posts = [newPost, ...posts];
    return newPost;
  }
  
  export const api = {
    getTopUsers: () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          // Sort users by post count and get top 5
          const topUsers = [...users].sort((a, b) => b.posts - a.posts).slice(0, 5);
          resolve(topUsers);
        }, 500);
      });
    },
    
    getTrendingPosts: () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          // Find the maximum comment count
          const maxComments = Math.max(...posts.map(post => post.comments));
          // Get all posts with the maximum comment count
          const trendingPosts = posts.filter(post => post.comments === maxComments);
          resolve(trendingPosts);
        }, 500);
      });
    },
    
    getFeed: () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          // Sort posts by timestamp (newest first)
          const feed = [...posts].sort((a, b) => b.timestamp - a.timestamp);
          resolve(feed);
        }, 500);
      });
    },
    
    // Simulate real-time updates for the feed
    subscribeToFeed: (callback) => {
      const intervalId = setInterval(() => {
        const newPost = addNewPost();
        callback(newPost);
      }, 10000); // Add a new post every 10 seconds
      
      return () => clearInterval(intervalId); // Return cleanup function
    }
  };