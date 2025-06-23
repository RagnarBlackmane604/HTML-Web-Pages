let challenges = [];

exports.createChallenge = (req, res) => {
  const challengeData = req.body;
  challenges.push({
    id: challenges.length + 1,
    ...challengeData
  });

  res.status(201).json({ message: 'Challenge created', challenge: challengeData });
};

exports.getAllChallenges = (req, res) => {
  const { category } = req.query;
  let filtered = challenges;

  if (category) {
    filtered = challenges.filter(ch => ch.category.toLowerCase() === category.toLowerCase());
  }

  res.status(200).json(filtered);
};

exports.getChallengeById = (req, res) => {
  const id = Number(req.params.id);
  const challenge = challenges.find(ch => ch.id === id);

  if (!challenge) {
    return res.status(404).json({ message: 'Challenge not found' });
  }

  res.status(200).json(challenge);
};

exports.getAllCategories = (req, res) => {
  const categories = [...new Set(challenges.map(ch => ch.category))];
  res.status(200).json(categories);
};

const categories = ['Math', 'Strings', 'Algorithms', 'Data Structures'];

exports.getAllCategories = (req, res) => {
  res.status(200).json(categories);
};
