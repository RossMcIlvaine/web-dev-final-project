import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Filter = () => {
  const [category, setCategory] = useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ minWidth: 150 }}>
        <InputLabel id="demo-simple-select-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Filter"
          onChange={handleChange}
        >
          <MenuItem value={10}>Full Body</MenuItem>
          <MenuItem value={20}>Upper Body</MenuItem>
          <MenuItem value={30}>Lower Body</MenuItem>
          <MenuItem value={40}>Core</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default Filter;