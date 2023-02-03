import React from 'react';
import {Box} from "@mui/material";

function Rightbar() {
    return (
        <Box bgcolor="pink" flex={2} sx={{display: {xs: "none", sm: "flex"}}}>RightBar</Box>
    );
}

export default Rightbar;
