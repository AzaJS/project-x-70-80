import { Grid, InputAdornment, Paper, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams } from "react-router-dom";

const SideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  return (
    <Grid item md={3}>
      <Paper elevation={5} sx={{ p: 2 }}>
        <TextField
          fullWidth
          id="input-with-icon-textfield"
          label="Search..."
          variant="outlined"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Paper>
    </Grid>
  );
};

export default SideBar;
