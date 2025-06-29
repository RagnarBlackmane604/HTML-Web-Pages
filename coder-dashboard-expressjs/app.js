const express = require('express');
const app = express();

const gradingRoutes = require('./routes/gradingRoutes');
const leaderboardRoutes = require('./routes/leaderboardRoutes');
const statsRoutes = require('./routes/statsRoutes');

const authCoderRoutes = require('./routes/auth/coder');
const authManagerRoutes = require('./routes/auth/manager');

const profileCoderRoutes = require('./routes/profile/coder');
const profileManagerRoutes = require('./routes/profile/manager');

const challengeRoutes = require('./routes/challengeRoutes');
const submissionsRoutes = require('./routes/submissionsRoutes');

app.use(express.json());

// Auth Routes
app.use('/auth/coder', authCoderRoutes);
app.use('/auth/manager', authManagerRoutes);

// Profile Routes
app.use('/profile/coder', profileCoderRoutes);
app.use('/profile/manager', profileManagerRoutes);

// Challenge Routes
app.use('/challenges', challengeRoutes);

// Grading Routes
app.use('/grading', gradingRoutes);

// Leaderboard Routes
app.use('/leaderboard', leaderboardRoutes);

// Stats Routes
app.use('/stats', statsRoutes);

// Submissions Routes
app.use('/submissions', submissionsRoutes);

// Main Route
app.get('/', (req, res) => {
  res.send('Willkommen auf der Startseite!');
});

module.exports = app;
