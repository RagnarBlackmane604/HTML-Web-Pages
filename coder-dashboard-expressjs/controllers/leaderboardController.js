const leaderboard = [
  { userId: 'user1', score: 150 },
  { userId: 'user2', score: 120 },
  { userId: 'user3', score: 100 },
];


exports.getLeaderboard = (req, res) => {
 
  const sorted = leaderboard.sort((a, b) => b.score - a.score);
  res.json(sorted);
};


exports.getTopKCoders = (req, res) => {
  const k = parseInt(req.query.k, 10);
  if (!k || k <= 0) {
    return res.status(400).json({ message: 'Invalid value for k' });
  }
  const sorted = leaderboard.sort((a, b) => b.score - a.score);
  res.json(sorted.slice(0, k));
};
