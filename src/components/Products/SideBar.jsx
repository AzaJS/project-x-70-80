import { Grid, InputAdornment, Paper, TextField } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';


const SideBar = () => {
    return (
        <Grid item md={3}>
            <Paper elevation={5} sx={{p: 2}}>
                <TextField
                fullWidth
                variant='outlined'
                id='input-with-icon-textField'
                label="Search..."
                InputProps={{
                    startAdornment:(
                        <InputAdornment position="start">
                            <SearchIcon/>
                        </InputAdornment>
                    )
                }}
                />
            </Paper>
        </Grid>
    );
};

export default SideBar;