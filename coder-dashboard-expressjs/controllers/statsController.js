exports.getSolvedChallengesStats = (req, res) => {
  res.json({
    totalSolved: 42,
    byLevel: { Easy: 10, Medium: 20, Hard: 12 }
  });
};

exports.getTrendingCategories = (req, res) => {
  res.json({
    trending: ['Math', 'Algorithms', 'Data Structures']
  });
};

exports.getHeatmap = (req, res) => {
  const { start_date, end_date } = req.query;

  res.json({
    start_date,
    end_date,
    heatmap: [
      { date: '2025-06-20', correctSubmissions: 5 },
      { date: '2025-06-21', correctSubmissions: 3 }
    ]
  });
};


exports.getTopKCoders = (req, res) => {
  const { k } = req.query;
  
  res.json({
    topK: k || 5,
    coders: [
      { username: 'alice', score: 98 },
      { username: 'bob', score: 95 },
      { username: 'carol', score: 90 }
    ]
  });
};
