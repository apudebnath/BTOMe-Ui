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


const drawerWidth = 300;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const buttons = [
        <Button key="one"> <Link className='text-decoration-none' to="/dashboard"> Dashboard </Link></Button>,
        <Button key="two"><Link className='text-decoration-none' to="orders">Manage Orders </Link></Button>,
        <Button key="three"><Link className='text-decoration-none' to="review"> Give a Review </Link></Button>,
        <Button key="four"><Link className='text-decoration-none' to="addProduct">Add a Product</Link> </Button>,
        <Button key="five"><Link className='text-decoration-none' to="manageProducts">Manage Products </Link></Button>,
        <Button key="six"><Link className='text-decoration-none' to="makeAdmin">Make An Admin </Link></Button>,
        <Button key="seven"><Link className='text-decoration-none' to="">Log Out </Link></Button>
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
            <div className='py-5 ps-auto' style={{ 'background-color': '#03153a' }}>
                <ButtonGroup
                    orientation="vertical"
                    aria-label="large button group"
                    variant="outlined"
                    size="large"
                    sx={{ p: 1, backgroundColor: 'white' }}
                >
                    {buttons}
                </ButtonGroup>
            </div>
            {/* <Divider /> */}
        </div >
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
                    backgroundColor: '#03153a'
                }}
            >
                {/* <Toolbar> */}
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                {/* 
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography> */}

                {/* <Link to='/'>
                        <img src="../logo1.png"
                            width="150"
                            height="60"
                            className="d-inline-block align-top" alt="BToMe logo" />
                    </Link> */}

                {/* </Toolbar> */}
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
