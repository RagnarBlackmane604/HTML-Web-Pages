exports.getManagerProfile = (req, res) => {

  res.status(200).json({
    email: 'manager@example.com',
    firstName: 'Man',
    lastName: 'Ager',
    about: 'Team manager at CodeLabs'
  });
};

exports.updateManagerProfile = (req, res) => {
  const { firstName, lastName, about } = req.body;


  res.status(200).json({
    message: 'Manager profile updated successfully',
    data: {
      firstName,
      lastName,
      about
    }
  });
};
