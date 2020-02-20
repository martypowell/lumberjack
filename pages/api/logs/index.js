let logs = [
  {
    id: 1,
    type: "warning",
    message: "This is a sample warning message.",
    date: "2019-07-04T13:33:03.969Z"
  },
  {
    id: 2,
    type: "error",
    message: "Something went terribly wrong.",
    date: "2019-07-04T13:33:03.969Z"
  },
  {
    id: 3,
    type: "info",
    message: "The sky is blue.",
    date: "2019-07-04T13:33:03.969Z"
  },
  {
    id: 4,
    type: "custom",
    message: "This is a custom message.",
    date: "2019-07-04T13:33:03.969Z"
  }
];

/**
 * Handle GET requests to the logs endpoint
 * @param {object} req
 * @param {object} res
 */
const handleGET = (req, res) => {
  res.status(200).json(logs);
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
