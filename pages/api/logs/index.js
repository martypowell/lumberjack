import Logs from "../../../data/Logs";

/**
 * Handle GET requests to the logs endpoint
 * @param {object} req
 * @param {object} res
 */
const handleGET = (req, res) => {
  res.status(200).json(Logs);
};

/**
 * Handle POST requests to the logs endpoint
 * @param {object} req
 * @param {object} res
 */
const handlePOST = ({ body: requestBody }, res) => {
  res.status(200).json({ ...requestBody, ...{ date: new Date() } });
};

export default (req, res) => {
  if (req.method.toUpperCase() === "POST") {
    handlePOST(req, res);
  } else {
    handleGET(req, res);
  }
};
