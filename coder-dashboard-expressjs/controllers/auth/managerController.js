exports.getAllManagers = (req, res) => {
  const managers = [
    { id: '1', name: 'Max Mustermann', department: 'Sales' },
    { id: '2', name: 'Erika Musterfrau', department: 'Development' }
  ];
  res.status(200).json(managers);
};

exports.createManager = (req, res) => {
  const { name, department } = req.body;
  const newManager = { id: String(Date.now()), name, department };
  res.status(201).json({ message: 'Manager created successfully', data: newManager });
};

exports.getManagerById = (req, res) => {
  const { id } = req.params;
  const manager = { id, name: 'Max Mustermann', department: 'Sales' };
  if (!manager) return res.status(404).json({ message: 'Manager not found' });
  res.status(200).json(manager);
};


exports.loginManager = (req, res) => {
  const { email, password } = req.body;

  res.status(200).json({ message: 'Manager logged in', email });
};


exports.registerManager = (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  
  res.status(201).json({
    message: 'Manager registered successfully',
    data: { email, firstName, lastName }
  });
};