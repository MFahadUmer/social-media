import React, {useState} from 'react';
import {AppBar, Avatar, Badge, InputBase, Menu, MenuItem, styled, Toolbar, Typography} from "@mui/material";
import {ConnectWithoutContact, Mail, Notifications} from "@mui/icons-material";

function Navbar() {
    const [open, setOpen] = useState(false)
    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between",
    });
    const Search = styled('div')(({theme}) => ({
        backgroundColor: "white",
        width: "40%",
        borderRadius: "0.7rem",
        padding: "3px 10px",
    }));
    const Icons = styled('div')(({theme}) => ({
        display: "none",
        gap: "25px",
        alignItems: "center",
        [theme.breakpoints.up("sm")]: {
            display: "flex"
        }
    }))
    const Profile = styled('div')(({theme}) => ({
        display: "flex",
        gap: "5px",
        alignItems: "center",
        [theme.breakpoints.up("sm")]: {
            display: "none",
        }
    }))
    return (
        <AppBar position="fixed">
            <StyledToolbar>
                <Typography variant="h5" sx={{display: {xs: "none", sm: "block"}}}>Social</Typography>
                <ConnectWithoutContact sx={{display: {xs: "block", sm: "none"}, fontSize: "36px"}}/>
                <Search> <InputBase placeholder="search..."/> </Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail color="action"/>
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications color="action"/>
                    </Badge>
                    <Avatar onClick={() => {
                        setOpen(true)
                    }} sx={{width: "30px", height: "30px"}} alt="Muhammad Fahad Umer"
                            src="https://res.cloudinary.com/torre-technologies-co/image/upload/c_fill,h_150,w_150/v0/origin/starrgate/users/profile_8531aed25eb4fe182b53de57618e807df83610e8.jpg"/>
                </Icons>
                <Profile onClick={() => setOpen(true)}>
                    <Avatar sx={{width: "30px", height: "30px"}} alt="Muhammad Fahad Umer"
                            src="https://res.cloudinary.com/torre-technologies-co/image/upload/c_fill,h_150,w_150/v0/origin/starrgate/users/profile_8531aed25eb4fe182b53de57618e807df83610e8.jpg"/>
                    <Typography variant="span">Muhammad</Typography>
                </Profile>
            </StyledToolbar>
            <Menu
                id="basic-menu"
                open={open}
                onClose={() => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: "right",
                }}

                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    );
}

export default Navbar;
