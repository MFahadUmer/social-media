import React, {useState} from 'react';
import {Box, Tooltip, IconButton, Fab, Modal, Typography, styled} from "@mui/material";
import {Add as AddIcon} from "@mui/icons-material";

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
})

function Add() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Tooltip title="Delete"
                     sx={{position: "fixed", bottom: "20px", left: {xs: "calc(50% - 25px)", md: "10px"}}}>
                <IconButton>
                    <Fab>
                        <AddIcon/>
                    </Fab>
                </IconButton>
            </Tooltip>
            <StyledModal
                open={true}
                onClose={() => {
                    setOpen(false)
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} bgcolor="white" borderRadius={2}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Create Post
                    </Typography>
                </Box>
            </StyledModal>
        </>
    );
}

export default Add;
