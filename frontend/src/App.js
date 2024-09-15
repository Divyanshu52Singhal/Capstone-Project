import React, { useEffect, useState } from "react";
import { CssBaseline, Container, Grid, Paper } from '@mui/material';
import Header from './components/Header';
import Chart from './components/Chart';
import RecentActivity from './components/RecentActivity';

function App() {
  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    password: '',
    role: '',
  });

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [response, setResponse] = useState('');

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerData),
    });
    const data = await res.json();
    setResponse(JSON.stringify(data, null, 2));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });
    const data = await res.json();
    setResponse(JSON.stringify(data, null, 2));
  };
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Grid container spacing={3}>
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
    <h1>Backend Testing</h1>

    <h2>Register</h2>
    <form onSubmit={handleRegisterSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={registerData.username}
        onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={registerData.email}
        onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={registerData.password}
        onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
      />
      <input
        type="text"
        placeholder="Role (user/admin)"
        value={registerData.role}
        onChange={(e) => setRegisterData({ ...registerData, role: e.target.value })}
      />
      <button type="submit">Register</button>
    </form>

    <h2>Login</h2>
    <form onSubmit={handleLoginSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={loginData.email}
        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={loginData.password}
        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
      />
      <button type="submit">Login</button>
    </form>

    <h3>Response:</h3>
    <pre>{response}</pre>
  </div>
  );
}

export default App;
