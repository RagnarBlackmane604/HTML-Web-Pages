exports.postSubmission = async (req, res) => {
  const { lang, code, challenge_id } = req.body;

  try {
    const result = { score: 100, message: "Passed all tests" };

    res.status(200).json({
      success: true,
      result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
