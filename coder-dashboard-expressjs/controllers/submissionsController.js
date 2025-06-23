exports.getSubmissionById = (req, res) => {
  const { id } = req.params;

  res.json({ message: `Submission mit ID ${id}` });
};
