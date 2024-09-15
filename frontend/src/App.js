import React from 'react';
import { CssBaseline, Container, Grid, Paper } from '@mui/material';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Chart from './components/Chart';
import RecentActivity from './components/RecentActivity';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={9}>
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              <Grid item xs={12} md={8} lg={9}>
                <Paper elevation={3}>
                  <Chart />
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Paper elevation={3}>
                  <RecentActivity />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
