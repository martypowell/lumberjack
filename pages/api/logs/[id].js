import Logs from "../../../data/Logs";

/**
 * Handle GET requests to the logs endpoint
 * @param {object} req
 * @param {object} res
 */
const handleGET = (req, res) => {
  const {
    query: { id }
  } = req;

  const log = Logs.find(x => x.id === parseInt(id));

  if (!log) {
    return res.status(404).json({
      status: 404,
      message: `A log with the id of ${id} could not be found.`
    });
  }

  return res.status(200).json(log);
};

export default (req, res) => {
  handleGET(req, res);
};
