const logs = [
  {
    type: "warning",
    message: "This is a sample warning message.",
    date: "2019-07-04T13:33:03.969Z"
  },
  {
    type: "error",
    message: "Something went terribly wrong.",
    date: "2019-07-04T13:33:03.969Z"
  },
  {
    type: "info",
    message: "The sky is blue.",
    date: "2019-07-04T13:33:03.969Z"
  },
  {
    type: "custom",
    message: "This is a custom message.",
    date: "2019-07-04T13:33:03.969Z"
  }
];

export default (req, res) => {
  res.status(200).json(logs);
};
