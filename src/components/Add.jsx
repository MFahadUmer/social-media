import React, {useState} from 'react';
import {
    Box,
    Tooltip,
    IconButton,
    Fab,
    Modal,
    Typography,
    styled,
    Avatar,
    TextField,
    Stack,
    ButtonGroup,
    Button
} from "@mui/material";
import {Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from "@mui/icons-material";

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
})

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
})

function Add() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Tooltip title="Add Post" onClick={() => {
                setOpen(true)
            }}
                     sx={{position: "fixed", bottom: "20px", left: {xs: "calc(50% - 25px)", md: "10px"}}}>
                <IconButton>
                    <Fab>
                        <AddIcon/>
                    </Fab>
                </IconButton>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={() => {
                    setOpen(false)
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} bgcolor="white" borderRadius={5} p={3}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" color={"gray"} textAlign={"center"}>
                        Create Post
                    </Typography>
                    <UserBox>
                        <Avatar
                            src="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg"
                            sx={{width: 30, height: 30}}/>
                        <Typography>Muhammad</Typography>
                    </UserBox>
                    <TextField
                        sx={{width: "100%"}}
                        id="standard-multiline-static"
                        placeholder="What's on your mind"
                        multiline
                        rows={3}
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} sx={{mt: "10px", mb: "3px"}}>
                        <EmojiEmotions color="primary"/>
                        <VideoCameraBack color="secondary"/>
                        <Image color="success"/>
                        <PersonAdd color="error"/>
                    </Stack>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{mt: "20px"}}
                                 fullWidth>
                        <Button>Post</Button>
                        <Button sx={{width: "100px"}}><DateRange/></Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    );
}

export default Add;
