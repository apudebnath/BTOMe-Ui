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
import { Button, Typography } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import Footer from '../../Home/Footer/Footer';
/* import UseFirebaseAuth from '../../../customhook/UseFirebaseAuth'; */

const drawerWidth = 300;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    /* const { logOut } = UseFirebaseAuth(); */

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Link to="/">
                <img src="../logo1.png"
                    width="200"
                    height="120"
                    className="d-inline-block align-top" alt="B2Me logo" />
            </Link>
            <Divider />
            <div className='py-5 px-auto' style={{ 'backgroundColor': '#03153a' }}>
                <ButtonGroup
                    orientation="vertical"
                    aria-label="large button group"
                    variant="outlined"
                    size="large"
                    sx={{ p: 1, backgroundColor: 'white' }}
                >
                    <Button>
                        <Link className='text-decoration-none' to="/dashboard" > Dashboard </Link ></Button >

                            <Button>
                                <Link className='text-decoration-none' to="orders">Manage Orders </Link>
                            </Button>
                            <Button>
                                <Link className='text-decoration-none' to="addProduct">Add a Product</Link>
                            </Button>
                            <Button>
                                <Link className='text-decoration-none' to="manageProducts">Manage Products </Link>
                            </Button>
                            <Button>
                                <Link className='text-decoration-none' to="makeAdmin">Make An Admin </Link>
                            </Button>


                        <Button>
                            <Link className='text-decoration-none' to="review"> Give a Review </Link>
                        </Button>

                    <Button>
                        <Link className='text-decoration-none' to="payment">Payment </Link>
                    </Button>
                    {/* <Button>
                        <Link onClick={logOut} className='text-decoration-none'>Log Out </Link>
                    </Button> */}
                </ButtonGroup>
            </div>
            <Divider />
        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box className='text-center' sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: '#03153a',
                    paddingTop: '20px',
                    paddingBottom: '20px'
                }}
            >
                <Toolbar sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    p: 1,
                    m: 1,
                }}>
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

                <Footer />

            </Box>
        </Box >
    );
}

Dashboard.propTypes = {
    window: PropTypes.func,
};

export default Dashboard;