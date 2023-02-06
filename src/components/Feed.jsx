import React from 'react';
import {Box} from "@mui/material";
import Post from "./Post";

function Feed() {
    return (
        <Box flex={4} margin={5}>
            <Box marginTop={8}>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </Box>
        </Box>
    );
}

export default Feed;
