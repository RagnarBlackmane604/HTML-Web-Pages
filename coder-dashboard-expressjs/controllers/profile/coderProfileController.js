exports.getCoderProfile = (req, res) => {
  res.status(200).json({
    email: 'coder@example.com',
    firstName: 'Code',
    lastName: 'R',
    about: 'Full-stack developer'
  });
};

exports.updateCoderProfile = (req, res) => {
  const { firstName, lastName, about } = req.body;
  res.status(200).json({ message: 'Profile updated', data: { firstName, lastName, about } });
};
