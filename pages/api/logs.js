const logs = [
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

const handleGET = (req, res) => {
  res.status(200).json(logs);
};

const handlePOST = ({ body: requestBody }, res) => {
  const log = JSON.parse(requestBody);
  res.status(200).json({ ...log, ...{ date: new Date() } });
};

export default (req, res) => {
  if (req.method.toUpperCase() === "POST") {
    handlePOST(req, res);
  } else {
    handleGET(req, res);
  }
};
