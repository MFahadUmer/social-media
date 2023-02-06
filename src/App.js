import {Box, createTheme, Stack, ThemeProvider} from "@mui/material";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import {useState} from "react";

function App() {
    const [mode, setMode] = useState('light');
    const darkTheme = createTheme({
        palette: {
            mode: mode,
        },
    })
    const changeMode = () => {
        setMode(mode === 'light' ? 'dark' : 'light');
    }
    return (
        <ThemeProvider theme={darkTheme}>
            <Box bgcolor="background.default" color="text.primary">
                <Navbar/>
                <Stack direction="row" spacing={2} justifyContent="space-evenly">
                    <Sidebar changeMode={changeMode}/>
                    <Feed/>
                    <Rightbar/>
                </Stack>
                <Add/>
            </Box>
        </ThemeProvider>
    );
}

export default App;
