import React from 'react';
import {
    Box,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
    AvatarGroup,
    Avatar,
    ImageList,
    ImageListItem,
    Divider
} from "@mui/material";

function Rightbar() {
    return (
        <Box flex={2} sx={{display: {xs: "none", sm: "flex"}}}>
            <Box position="fixed">
                <Box sx={{mt: "10px"}}>
                    <Typography variant="h6" fontWeight={100}>Online Friends</Typography>
                    <AvatarGroup max={6}>
                        <Avatar alt="Remy Sharp" src=""/>
                        <Avatar alt="Travis Howard" src=""/>
                        <Avatar alt="Cindy Baker" src=""/>
                        <Avatar alt="Agnes Walker" src=""/>
                        <Avatar alt="Trevor Henderson" src=""/>
                        <Avatar alt="Trevor Henderson" src=""/>
                        <Avatar alt="Trevor Henderson" src=""/>
                        <Avatar alt="Trevor Henderson" src=""/>
                    </AvatarGroup>
                </Box>
                <Box sx={{mt: "10px"}}>
                    <Typography variant="h6" fontWeight={100}>Latest Updates</Typography>
                    <ImageList cols={3} rowHeight={130}>
                        <ImageListItem>
                            <img
                                src="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg"
                                loading="lazy"
                            />
                        </ImageListItem>
                        <ImageListItem>
                            <img
                                src="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg"
                                loading="lazy"
                            />
                        </ImageListItem>
                        <ImageListItem>
                            <img
                                src="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg"
                                loading="lazy"
                            />
                        </ImageListItem>
                        <ImageListItem>
                            <img
                                src="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg"
                                loading="lazy"
                            />
                        </ImageListItem>
                        <ImageListItem>
                            <img
                                src="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg"
                                loading="lazy"
                            />
                        </ImageListItem>
                        <ImageListItem>
                            <img
                                src="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg"
                                loading="lazy"
                            />
                        </ImageListItem>
                    </ImageList>
                </Box>
                <Box sx={{mt: "10px"}}>
                    <Typography variant="h6" fontWeight={100}>Latest Conversions</Typography>
                    <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                            </ListItemAvatar>
                            <ListItemText
                                primary="Brunch this weekend?"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{display: 'inline'}}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Ali Connors
                                        </Typography>
                                        {" — I'll be in your neighborhood doing errands this…"}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li"/>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                            </ListItemAvatar>
                            <ListItemText
                                primary="Brunch this weekend?"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{display: 'inline'}}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Ali Connors
                                        </Typography>
                                        {" — I'll be in your neighborhood doing errands this…"}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    </List>
                </Box>

            </Box>
        </Box>
    );
}

export default Rightbar;
