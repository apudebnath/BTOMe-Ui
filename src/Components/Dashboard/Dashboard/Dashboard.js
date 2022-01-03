import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';


const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const buttons = [
        <Button as={Link} to="/dashboard" key="one">Dashboard</Button>,
        <Button as={Link} to="orders" key="two">Manage Orders</Button>,
        <Button as={Link} to="messages" key="three">Users Messages</Button>,
        <Button as={Link} to="addProduct" key="four">Add a Product</Button>,
        <Button as={Link} to="manageProducts" key="five">Manage Products</Button>,
        <Button as={Link} to="makeAdmin" key="six">Make An Admin</Button>,
    ];

    const drawer = (
        <div>
            <Link to="/">
                <img src="../logo1.png"
                    width="200"
                    height="80"
                    className="d-inline-block align-top" alt="B2Me logo" />
            </Link>
            <Divider />
            <div className='py-5 ps-4'>
                <ButtonGroup
                    orientation="vertical"
                    aria-label="vertical contained button group"
                    variant="outlined"
                    sx={{ p: 3 }}
                >
                    {buttons}
                </ButtonGroup>
            </div>
            <Divider />
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box className='body' sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>

                    {/* <Link to='/'>
                        <img src="../logo1.png"
                            width="150"
                            height="60"
                            className="d-inline-block align-top" alt="BToMe logo" />
                    </Link> */}

                </Toolbar>
            </AppBar>

            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Outlet />

            </Box>
        </Box >
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
