exports.registerCoder = (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  res
    .status(201)
    .json({
      message: "Coder registered successfully",
      data: { email, firstName, lastName },
    });
};

exports.loginCoder = (req, res) => {
  const { email, password } = req.body;
  res.status(200).json({ message: "Coder logged in", token: "fake-jwt-token" });
};
