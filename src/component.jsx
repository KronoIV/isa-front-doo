import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Container, Grid, TextField, FormControl, InputLabel, Select, MenuItem, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function Component() {
  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Productos
          </Typography>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <FilterListIcon />
          </IconButton>
          <Button variant="contained" startIcon={<AddCircleOutlineIcon />} color="secondary">
            Agregar Producto
          </Button>
        </Toolbar>
      </AppBar>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>
            <TextField
              id="outlined-basic"
              label="Buscar Producto"
              variant="outlined"
              fullWidth
            />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Filtrar por:</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue=""
              >
                <MenuItem value={1}>Categoría</MenuItem>
                <MenuItem value={2}>Proveedor</MenuItem>
                <MenuItem value={3}>Marca</MenuItem>
              </Select>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            {/* Aquí puedes iterar sobre tus productos y mostrarlos en una tabla */}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}