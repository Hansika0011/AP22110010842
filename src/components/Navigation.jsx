import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Tabs, 
  Tab, 
  Box, 
  useMediaQuery, 
  useTheme, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navigation = () => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const getPathValue = () => {
    if (location.pathname === '/') return 0;
    if (location.pathname === '/top-users') return 1;
    if (location.pathname === '/trending-posts') return 2;
    return 0;
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { label: 'Feed', path: '/' },
    { label: 'Top Users', path: '/top-users' },
    { label: 'Trending Posts', path: '/trending-posts' }
  ];

  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((item, index) => (
          <ListItem 
            button 
            key={item.label} 
            component={NavLink} 
            to={item.path}
            selected={location.pathname === item.path}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: isMobile ? 1 : 0 }}>
          Social Media Analytics
        </Typography>
        
        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <Tabs 
            value={getPathValue()} 
            textColor="inherit" 
            indicatorColor="secondary"
            sx={{ ml: 4 }}
          >
            <Tab label="Feed" component={NavLink} to="/" />
            <Tab label="Top Users" component={NavLink} to="/top-users" />
            <Tab label="Trending Posts" component={NavLink} to="/trending-posts" />
          </Tabs>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;