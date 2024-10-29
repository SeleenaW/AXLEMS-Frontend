const express = require('express');
const app = express();

// Middleware for parsing JSON requests
app.use(express.json());

// Sample route for the User dashboard
app.get('/', (req, res) => {
  res.send('Welcome to the User Dashboard Service');
});

// Additional routes can be added here
// Example:
// app.use('/api/users', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

module.exports = app;
