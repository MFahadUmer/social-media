import React from 'react';
import {Box, List, ListItemButton, ListItemIcon, ListItemText, Switch} from "@mui/material";
import {AccountBox, Article, Group, House, ModeNight, Person, Settings, Storefront} from "@mui/icons-material";

function Sidebar() {
    return (
        <Box flex={1} sx={{display: {xs: "none", md: "flex"}}}>
            <List disablePadding>
                <ListItemButton sx={{pl: 4}} component={"a"} href={"#home"}>
                    <ListItemIcon>
                        <House/>
                    </ListItemIcon>
                    <ListItemText primary="HomePage"/>
                </ListItemButton>
                <ListItemButton sx={{pl: 4}} component={"a"} href={"#home"}>
                    <ListItemIcon>
                        <Article/>
                    </ListItemIcon>
                    <ListItemText primary="Pages"/>
                </ListItemButton>
                <ListItemButton sx={{pl: 4}} component={"a"} href={"#home"}>
                    <ListItemIcon>
                        <Group/>
                    </ListItemIcon>
                    <ListItemText primary="Groups"/>
                </ListItemButton>
                <ListItemButton sx={{pl: 4}} component={"a"} href={"#home"}>
                    <ListItemIcon>
                        <Storefront/>
                    </ListItemIcon>
                    <ListItemText primary="Marketplace"/>
                </ListItemButton>
                <ListItemButton sx={{pl: 4}} component={"a"} href={"#home"}>
                    <ListItemIcon>
                        <Person/>
                    </ListItemIcon>
                    <ListItemText primary="Friends"/>
                </ListItemButton>
                <ListItemButton sx={{pl: 4}} component={"a"} href={"#home"}>
                    <ListItemIcon>
                        <Settings/>
                    </ListItemIcon>
                    <ListItemText primary="Settings"/>
                </ListItemButton>
                <ListItemButton sx={{pl: 4}} component={"a"} href={"#home"}>
                    <ListItemIcon>
                        <AccountBox/>
                    </ListItemIcon>
                    <ListItemText primary="Profile"/>
                </ListItemButton>
                <ListItemButton sx={{pl: 4}} component={"a"} href={"#home"}>
                    <ListItemIcon>
                        <ModeNight/>
                    </ListItemIcon>
                    <Switch defaultChecked/>
                </ListItemButton>
            </List>
        </Box>
    );
}

export default Sidebar;
