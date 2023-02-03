import React from 'react';
import {Box} from "@mui/material";

function Sidebar() {
    return (
        <Box bgcolor="yellow" flex={1} sx={{display: {xs: "none", md: "flex"}}} >Sidebar</Box>
    );
}

export default Sidebar;
